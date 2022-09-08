/** @jsx h */
import { h } from "preact";
import { Helmet } from "react-helmet"


export default function Home() {
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
   <p>
      <input type="text" id="jobInput"/>
   </p>
   <button id="search" onclick="search()">Search</button>
</div>

  );
}
