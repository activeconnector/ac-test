/** @jsx h */
import { h } from "preact";

const search = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="search a job"
        id="input"
      />
      <button
        onClick={() =>
          location.replace("/jobs/" + document.getElementById("input").value)}
      >
        Search
      </button>
    </div>
  );
};
export default search;
