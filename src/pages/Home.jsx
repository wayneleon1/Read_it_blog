import Singleblog from "../components/singleblog";
import Hero from "../components/Hero";
export default function Home() {
  return (
    <>
      <Hero />
      <div className="blog-section container">
        <Singleblog />
      </div>
    </>
  );
}
