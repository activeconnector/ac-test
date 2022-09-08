/** @jsx h */
import { h } from "preact";

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
      

      <script>
        function search(){
           var input = document.getElementById("jobInput").value

           if (input == "engineer") {
            document.getElementById("div").innerText = "Job \"engineer\" is open for you!"
           } else {
            document.getElementById("div").innerText = "Job \"" + input + "\" is not available"
           }
        
           location.replace("http://localhost:8000/jobs/" + input)  
        }
      </script>
    </div>

  );
}
