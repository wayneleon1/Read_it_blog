import ArticleBlog from "../components/ArticleBlog";
import Hero from "../components/Hero";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Home() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://node-app-plsi.onrender.com/api/klab/blog/read"
      );
      const data = response.data.data;
      setBlogs(data);
    };
    getData();
  }, []);
  return (
    <>
      <Hero />
      <div className="Articles-section container">
        {blogs.map((post, index) => (
          <ArticleBlog
            key={index}
            title={post.title}
            image={post.blogImage}
            desc={post.content}
          />
        ))}
      </div>
    </>
  );
}
