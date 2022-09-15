/** @jsx h */
import { h } from "preact";

import type { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<string> = {
  async POST(req, ctx) {
    const formData = await req.formData();

    const job = formData.get("job") as string;

    return job
      ? Response.redirect(`http://localhost:8000/jobs/${job}`)
      : ctx.render("error: empty input");
  },
};

export default function Home({ data }: PageProps<string>) {
  return (
    <div>
      <a href="https://www.active-connector.com/">
        <img
          src="/logo.png"
          alt="Active Connector company logo"
        />
      </a>
      <h2>
        Skill Test (Software Engineer)
      </h2>

      <form method="POST">
        <input type="text" id="job" name="job" />
        <button type="submit">Search Job</button>
      </form>

      {data ? <p>{data}</p> : null}
    </div>
  );
}
