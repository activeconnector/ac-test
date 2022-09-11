/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import Search from "../islands/search.tsx";

export default function JobPage(props: PageProps) {
  const jobInfo = (props.params.page.toLowerCase() == "jobs")
    ? "error: empty input"
    : "error: page doesn't exist!";
  return (
    <div>
      <p>{jobInfo}</p>
      <Search />
    </div>
  );
}
