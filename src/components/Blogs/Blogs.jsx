import blog1 from "../../assets/blogs/blog1.jpg";
import blog2 from "../../assets/blogs/blog2.jpg";
import blog3 from "../../assets/blogs/blog3.jpg";
import blog4 from "../../assets/blogs/blog4.jpg";
import { motion } from "motion/react";
import { UpdateFollower } from "react-mouse-follower";

const Blogss = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet accerrnt end hesjeklkk",
    desc: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur ",
    link: "#",
    img: blog1,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet accerrnt end hesjeklkk",
    desc: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur ",
    link: "#",
    img: blog2,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet accerrnt end hesjeklkk",
    desc: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur ",
    link: "#",
    img: blog3,
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet accerrnt end hesjeklkk",
    desc: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur ",
    link: "#",
    img: blog4,
  },
];
function Blogs() {
  return (
    <section className="bg-gray-50">
      <div className="container py-14">
        <h1 className="font-Poppins pb-8 text-center text-3xl font-bold">
          Blogs
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {Blogss.map((blg) => (
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "black",
                zIndex: 999,
                followSpeed: 0.5,
                textColor: "white",
                text: "read",
                scale: 5,
                textFontSize: "3px",
              }}
            >
              <div className="mx-auto flex max-w-75 flex-col items-center justify-center gap-6 rounded-md bg-white p-5 shadow-lg duration-300 hover:-translate-y-2">
                <img src={blg.img} alt={blg.title} />
                <div className="space-y-2">
                  <h1 className="line-clamp-2 text-lg font-bold">
                    {blg.title}
                  </h1>
                  <p className="line-clamp-2">{blg.desc}</p>
                </div>
              </div>
            </UpdateFollower>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
