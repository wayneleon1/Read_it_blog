import Hero from "../components/Hero";
import ArticleBlog from "../components/ArticleBlog";
export default function Article() {
  return (
    <>
      <Hero />
      <div className="Articles-section container">
        <ArticleBlog />
        <ArticleBlog />
        <ArticleBlog />
      </div>
    </>
  );
}
