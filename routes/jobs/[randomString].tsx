/** @jsx h */
import { h } from "preact";
import { PageProps } from '$fresh/server.ts';

export default function RandomString(props: PageProps) {
  const { randomString } = props.params;

  return (
    <div>
      <p>
        { randomString === "engineer" 
            ? 'Job "engineer" is open for you!' 
            : randomString === '' 
            ? 'error: empty input' 
            : `Job "${randomString}" is not available`
        }
      </p>
    </div>
  );
}
