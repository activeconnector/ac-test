/** @jsx h */
import { h } from "preact";
import JobSearchForm from "../components/JobSearchForm.tsx";

export const handler: Handlers = {
  async POST(_req, ctx): Response {
    const a = _req.body.getReader();
    const b = await a.read();
    const c = new TextDecoder().decode(b.value);
    const body = Object.fromEntries(new URLSearchParams(c));

    if (!body.job) {
      return new Response("", {
        status: 307,
        headers: { Location: "/jobs" },
      });
    }
    return new Response("", {
      status: 307,
      headers: { Location: `/jobs/${body.job}` },
    });
  },
};

export default function Home() {
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
      <JobSearchForm />
    </div>
  );
}
