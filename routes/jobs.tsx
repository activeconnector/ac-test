/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";

interface Data {
    job
}

const AVAILABLE_JOBS = ['engineer']

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    let job = undefined
    const url = new URL(req.url);
    const query = url.searchParams.get("q");
    if (query !== null) {
        if (query) {
            job = AVAILABLE_JOBS.find((item: string) => item === query) ? "JOB_AVAILABLE" : "JOB_UNAVAILABLE";
        } else {
            job = 'EMPTY_STRING'
        }
    } 
    return ctx.render({ job, query });
  },
};


export default function Jobs({ data }: PageProps<Data>) {
    const { job, query } = data || {};
    const resultText = {
      EMPTY_STRING: "error: empty input",
      JOB_AVAILABLE: `Job "${query}" is open for you!`,
      JOB_UNAVAILABLE: `Job "${query}" is not available`,
    };
  return (
    <div>
      <section>
        <form>
          <input type="text" name="q" placeholder="search job here..." value={query} />
          <button type="submit">submit</button>
        </form>
      </section>
      <section>
        <p>{resultText[job]}</p>
      </section>
    </div>
  );
}
