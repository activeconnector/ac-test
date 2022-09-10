/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

const search = () => {
  const [inputValue, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="search a job"
        onInput={(e) => setValue(e.target.value)}
      >
      </input>
      <button onClick={() => location.replace(`/jobs/` + inputValue)}>
        Search
      </button>
    </div>
  );
};
export default search;
