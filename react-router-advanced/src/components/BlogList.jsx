import React from "react";
import { Link } from "react-router-dom";

const BlogList = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding React Router",
      excerpt: "React Router is a powerful routing library for React applications..."
    },
    {
      id: 2,
      title: "Advanced Routing Techniques",
      excerpt: "Nested routes and dynamic parameters are essential for complex applications..."
    }
  ];

  return (
    <div>
      <h2>Blog Posts</h2>
      {blogPosts.map(post => (
        <div key={post.id} style={{ marginBottom: '2rem' }}>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <Link to={`/blog/${post.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
