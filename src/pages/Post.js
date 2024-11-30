import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
  const navigate = useNavigate()

  async function getPostById() {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const post = await response.json();
      setPost(post)
     
      console.log(post)
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  useEffect(()=>{
    getPostById()
  },[])



  return (
    <div>
      
      <h1>Edit post id ${post.id}</h1>
      {/* <input placeholder="id" value={id} /> */}
      <input placeholder="title" value={post.title}/>
      <input placeholder="body" value={post.body}/>
      
      <button onClick={()=>navigate("/")}> save </button>
    </div>
  );
}

export default Post;
