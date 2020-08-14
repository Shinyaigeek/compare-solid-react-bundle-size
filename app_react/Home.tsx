import React, { useState, useEffect } from "react";
import { fetchPost } from "../src/fetchPost";
import { Post } from "./Post";

export const Home = () => {
  const [posts, setPosts] = useState<string[]>([]);

  useEffect(() => {
    fetchPost().then(json => {
       const t = json.map((j:any) => j.name)
       setPosts(t);
    })
  }, [])

  return <div className="home">
      {
          posts.length > 0 ? <>{posts.map((post, idx) => <Post key={`asdf__${idx}`} title={post} />)}</> : <div>Loading...</div>
      }
  </div>;
};
