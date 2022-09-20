/** @jsx h */
import { h } from "preact";

import type { PageProps } from "$fresh/server.ts";

function searchJob(job: string) {
  if (job === "engineer") {
    return `Job "engineer" is open for you!`;
  }

  return `Job "${job}" is not available`;
}

export default function JobPage(props: PageProps) {
  const { job } = props.params;

  return <div>{searchJob(job)}</div>;
}
