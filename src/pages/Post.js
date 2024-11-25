import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Post() {
  let { id } = useParams();
  const [post, setPost] = useState({
    userId: 10,
    id: 99,
    title: "temporibus sit alias delectus eligendi possimus magni",
    body: "quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function getPostById() {
    try {
      setLoading(true);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Edit post id ${id}</h1>
      {/* <input placeholder="id" value={id} /> */}
      <input placeholder="title" value={post.title}/>
      <input placeholder="body" value={post.body}/>
      <button> save </button>
    </div>
  );
}

export default Post;
