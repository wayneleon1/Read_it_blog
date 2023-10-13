import { Singleblog } from "../components/singleblog";
import Hero from "../components/Hero";
import BlogImg from "../Images/Blog-Image.jpg";
const blog = [
  {
    id: 1,
    Title: "Build a website in minutes with Adobe Templates",
    Image: BlogImg,
    category: "Techology",
    date: "11/13/2019",
    time: "12min",
    statu: "Read",
  },
  {
    id: 2,
    Title: "Build a website in minutes with Adobe Templates",
    Image: BlogImg,
    category: "science and Biology",
    date: "11/13/2019",
    time: "42min",
    status: "Read",
  },
  {
    id: 3,
    Title: "Build a website in minutes with Adobe Templates",
    Image: BlogImg,
    category: "Food and vegetable",
    date: "11/13/2019",
    time: "2min",
    status: "Read",
  },
  {
    id: 4,
    Title: "Build a website in minutes with Adobe Templates",
    Image: BlogImg,
    category: "illustration",
    date: "11/13/2019",
    time: "2min",
    status: "unRead",
  },
];
export default function Home() {
  return (
    <>
      <Hero />
      <div className="blog-section container">
        {blog.map((blog) => (
          <Singleblog
            key={blog.id}
            title={blog.Title}
            Image={blog.Image}
            category={blog.category}
            date={blog.date}
            time={blog.time}
            statu={blog.status}
          />
        ))}
      </div>
    </>
  );
}
