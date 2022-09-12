import { buildFor } from "sinco/mod.ts";
import { assertEquals } from "testing/asserts.ts";

const CHROME_BIN = Deno.env.get("CHROME_BIN");

Deno.test("E2E test", async (t) => {
  /* Start Sinco */
  const { browser, page } = await buildFor("chrome", {
    binaryPath: CHROME_BIN,
  });

  const index = "http://localhost:8000/";
  const remote = "https://www.active-connector.com/"

  /* Beginning of tests */

  await t.step("click the logo", async () => {
    await page.location(index);
    
    const image = await page.querySelector("img");
    await image.click({ waitFor: "navigation" });
    
    assertEquals(await page.location(), "https://www.active-connector.com/");
  });
  
  await t.step("input is empty", async () => {
    await page.location(remote);
    const input = await page.querySelector("input");
    assertEquals(await input.value(), "");
  });

  await page.location(index);
  
  await t.step("error is not shown", async () => {
    const error = await page.evaluate(() =>
    document.querySelector("p")?.innerText
    );
    assertEquals(error, undefined);
  });
  
  await t.step("show error for an empty input", async () => {
    await page.location(remote);
    const button = await page.querySelector(".button");
    await button.click({ waitFor: "navigation" });
    
    const error = await page.evaluate(() =>
    document.querySelector("p")?.innerText
    );
    assertEquals(error, "JOBS");
  });
  
  await t.step("input 'engineer' and click the button", async () => {
    await page.location(remote);
    const input = await page.querySelector("input");
    await input.value("engineer");

    const button = await page.querySelector(".button");
    await button.click({ waitFor: "navigation" });

    assertEquals(await page.location(), `${remote}jobs/allsearch.php?freeword=engineer&searchbtn=SEARCH+JOB`);

    const body = await page.evaluate(() => {
      return document.querySelector("div")?.innerText;
    });
    assertEquals(body, "");
  });

  await t.step("input a random string and click the button", async () => {
    await page.location(remote);
    const input = await page.querySelector("input");

    const name = crypto.randomUUID().slice(0, 7);
    await input.value(name);

    const button = await page.querySelector(".button");
    await button.click({ waitFor: "navigation" });

    assertEquals(await page.location(), `${remote}jobs/allsearch.php?freeword=${name}&searchbtn=SEARCH+JOB`);

    const body = await page.evaluate(() => {
      return document.querySelector("div")?.innerText;
    });
    assertEquals(body, "");
  });

  await page.location(index);


  /* End of tests */

  await browser.close();
});