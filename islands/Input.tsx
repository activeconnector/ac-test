/** @jsx h */
import { h } from "preact";

export default function Input() {
  const btnClickHandler = () => {
    const aEle = document.querySelector("a") as HTMLAnchorElement;
    const inputEle = document.querySelector("input") as HTMLInputElement;
    aEle.href = inputEle.value ? `jobs/${inputEle.value}` : "/error";
    aEle.click();
  };

  return (
    <div>
      <input type="text" />
      <button onClick={btnClickHandler}>
        <a>submit</a>
      </button>
    </div>
  );
}
