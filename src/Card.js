import React, { useEffect, useState } from "react";
// import "./h.css";

function Card() {
  const [posts, setPosts] = useState([]);
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
        posts
          .filter(
            (post) => post.title.includes(text) || post.body.includes(text)
          )
          ?.map((post, index) => {
            return (
              <div class="body" key={index} >
                <div>
                
                  <h1>no: ${post.id}</h1>
                  <img 
                    src={`https://placehold.co/400x400/green/white/png?text=${post.title[0]}`}
                  />
                  <button
                    onClick={() => {
                      setPosts((prev) =>
                        prev.filter((value) => value.id !== post.id)
                      );
                    }}
                  >
                    cler
                  </button>
                  <h2>title: {post.title}</h2>
                  <h2>body: {post.body}</h2>
                  
                  
                </div>
              </div>
            );
          })
      )}
    </div>
  );
}

export default Card;
