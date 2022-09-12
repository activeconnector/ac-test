/** @jsx h */
import { h, createRef } from "preact";

export default function Input() {
  const input = createRef();

  const btnClickHandler = () => {
    const aEle = document.querySelector("a") as HTMLAnchorElement;
    if (aEle != undefined)
      aEle.href = input?.current?.value
        ? `jobs/${input?.current?.value}`
        : "/error";
    aEle.click();
  };

  return (
    <div>
      <input type="text" ref={input} />
      <button onClick={btnClickHandler}>
        <a>submit</a>
      </button>
    </div>
  );
}
