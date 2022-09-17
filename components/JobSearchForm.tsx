/** @jsx h */
import { h } from "preact";

const JobSearchForm = () => {
  return (
    <form method="POST">
      <input type="text" name="job"/>
      <button type="submit">Search Job</button>
    </form>
  );
};

export default JobSearchForm;