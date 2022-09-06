/** @jsx h */
import { h } from "preact";

export const handler: Handlers<Project> = {
  async GET(_req, ctx) {
    const myposts =await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await myposts.json()
    if (!posts) {
      return new Response("Project not found", { status: 404 });
    }
    return ctx.render(posts);
  },
};

export default function Home(props) {
  const posts = props.data
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
      <ul>
        {posts.map(post => {
          return <li><a href={`/posts/${post.id}`}>{post.title}</a></li>
        })}
      </ul>
    </div>
  );
}
