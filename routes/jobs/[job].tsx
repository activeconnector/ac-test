/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";

export default function JobPage(props: PageProps) {
  const jobInput = props.params.job;
  const jobInfo = jobInput.toLowerCase() == "engineer"
    ? 'Job "engineer" is open for you!'
    : "Job " + '"' + jobInput + '"' + " is not available";
  return <div>{jobInfo}</div>;
}
