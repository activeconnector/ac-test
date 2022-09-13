/** @jsx h */
import { h } from "preact";

export default function InputPage(props) {
  let text = `Job "${props.params.name}" is not available`;
  if (props.params.name === "engineer") {
    text = 'Job "engineer" is open for you!';
  }
  return <div>{text}</div>;
}
