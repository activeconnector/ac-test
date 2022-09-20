/** @jsx h */
import { h } from "preact";

import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = (req, ctx) => {
  return ctx.render();
};
const Job = (props: PageProps) => {
  const { name } = props.params;

  return (
    <div>
      {name === "engineer"
        ? <p>Job "engineer" is open for you!</p>
        : <p>Job "{name}" is not available</p>}
    </div>
  );
};

export default Job;
