// import { Singleblog } from "../components/singleblog";
import ArticleBlog from "../components/ArticleBlog";
import Hero from "../components/Hero";
import image1 from "../Images/image1.jpg";
import BlogImg from "../Images/Blog-Image.jpg";
// const blog = [
//   {
//     id: 1,
//     Title: "Build a website in minutes with Adobe Templates",
//     Image: BlogImg,
//     category: "Techology",
//     date: "11/13/2019",
//     time: "12min",
//     statu: "Read",
//   },
//   {
//     id: 2,
//     Title: "Build a website in minutes with Adobe Templates",
//     Image: BlogImg,
//     category: "science and Biology",
//     date: "11/13/2019",
//     time: "42min",
//     status: "Read",
//   },
//   {
//     id: 3,
//     Title: "Build a website in minutes with Adobe Templates",
//     Image: BlogImg,
//     category: "Food and vegetable",
//     date: "11/13/2019",
//     time: "2min",
//     status: "Read",
//   },
//   {
//     id: 4,
//     Title: "Build a website in minutes with Adobe Templates",
//     Image: BlogImg,
//     category: "illustration",
//     date: "11/13/2019",
//     time: "2min",
//     status: "unRead",
//   },
// ];
const Post = [
  {
    id: 1,
    title: "All you want to know about industrial laws",
    featureImage: BlogImg,
    desc: ` A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
    date: {
      day: "18",
      month: "October",
      year: "2023",
    },
  },
  {
    id: 2,
    title: "All you want to know about industrial laws",
    featureImage: image1,
    desc: ` A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
    date: {
      day: "21",
      month: "November",
      year: "2023",
    },
  },
  {
    id: 3,
    title: "All you want to know about industrial laws",
    featureImage: BlogImg,
    desc: ` A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
    date: {
      day: "20",
      month: "November",
      year: "2023",
    },
  },
  {
    id: 4,
    title: "All you want to know about industrial laws",
    featureImage: image1,
    desc: ` A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
    date: {
      day: "13",
      month: "March",
      year: "2023",
    },
  },
  {
    id: 5,
    title: "All you want to know about industrial laws",
    featureImage: BlogImg,
    desc: ` A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
    date: {
      day: "09",
      month: "March",
      year: "2023",
    },
  },
  {
    id: 6,
    title: "All you want to know about industrial laws",
    featureImage: image1,
    desc: ` A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
    date: {
      day: "01",
      month: "March",
      year: "2023",
    },
  },
];
export default function Home() {
  return (
    <>
      <Hero />
      <div className="Articles-section container">
        {Post.map((post) => (
          <ArticleBlog
            key={post.id}
            title={post.title}
            image={post.featureImage}
            desc={post.desc}
            day={post.date.day}
            month={post.date.month}
            year={post.date.year}
          />
        ))}
      </div>
      {/* <div className="blog-section container">
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
      </div> */}
    </>
  );
}
