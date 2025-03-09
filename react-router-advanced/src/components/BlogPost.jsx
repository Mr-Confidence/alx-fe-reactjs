import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  // Simulated blog post data
  const blogPosts = {
    1: {
      title: "Understanding React Router",
      content: "React Router is a powerful routing library for React applications...",
      author: "John Doe",
      date: "2025-03-09"
    },
    2: {
      title: "Advanced Routing Techniques",
      content: "Nested routes and dynamic parameters are essential for complex applications...",
      author: "Jane Smith",
      date: "2025-03-08"
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return <h2>Blog post not found</h2>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p><strong>Author:</strong> {post.author}</p>
      <p><strong>Date:</strong> {post.date}</p>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
