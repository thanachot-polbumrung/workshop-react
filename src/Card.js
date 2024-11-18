import React, { useEffect, useState } from "react";
import "./h.css";

function Card() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [text, setText] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      setLoading(true);
      setError(false);
      await delay(3000);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = await response.json();
      setPosts(posts);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (error) {
    return (
      <div>
        <h1>ระบบเกิดข้อผิดพลาด TT ลอง refresh</h1>
        <button onClick={getPosts}>refresh</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <input onChange={(e) => setText(e.target.value)} />
      <div>{text}</div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        posts?.map((post, index) => {
          return (
            <div key={index}>
              <h1>no: ${index + 1}</h1>
              <h2>name: {post.title}</h2>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Card;
