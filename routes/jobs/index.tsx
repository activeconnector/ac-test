/** @jsx h */
import { h } from "preact";
import JobSearchForm from "../../components/JobSearchForm.tsx";

export const handler: Handlers = {
  async POST(_req, ctx): Response {
    const a = _req.body.getReader();
    const b = await a.read();
    const c = new TextDecoder().decode(b.value);
    const body = Object.fromEntries(new URLSearchParams(c));

    if (!body.job) {
      return ctx.render();
    }
    return new Response("", {
      status: 307,
      headers: { Location: `/jobs/${body.job}` },
    });
  },
};

const EmptyInput = () => {
  return (
    <div>
      <p>error: empty input</p>
      <JobSearchForm />
    </div>
  );
};

export default EmptyInput;
