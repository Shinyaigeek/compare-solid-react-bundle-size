//@ts-ignore
import { Component, createResourceState, createEffect } from "solid-js";
import { fetchPost } from "../src/fetchPost";
import { Post } from "./Post"

export const Home: Component<{}> = () => {
  const [state, load] = createResourceState();
  createEffect(() => {
    load({
      posts: fetchPost().then(json => {
          const t = json.map((j: any) => j.name)
          return t
      })
    });
  });

  return <div className="home">
      {
          state.posts ? <>{state.posts.map((post: string) => <Post title={post} />)}</> : <div>Loading</div>
      }
  </div>
};
