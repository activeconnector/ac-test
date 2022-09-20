/** @jsx h */
import { useState } from 'preact/hooks';
import { h } from "preact";

export default function Home() {
  const [inputText, setInputText] = useState("engineer")

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
      <input type="text" value={inputText} onInput={text => setInputText(text.currentTarget.value)} />
      <a href={`/jobs/${inputText}`}>
        <button>
          Apply
        </button>
      </a>
    </div>
  );
}