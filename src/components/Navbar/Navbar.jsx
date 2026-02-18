import React from "react";
import { SlEarphones } from "react-icons/sl";
import { MdMenu } from "react-icons/md";
import { MouseFollower, UpdateFollower } from "react-mouse-follower";
const NabarMenue = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "Categories",
    link: "#",
  },
  {
    id: 3,
    title: "Blog",
    link: "#",
  },
  {
    id: 4,
    title: "About",
    link: "#",
  },
  {
    id: 5,
    title: "Content",
    link: "#",
  },
];
function Navbar() {
  return (
    <>
      <div className="bg-brandDark font-varela py-4 text-white">
        <nav className="container flex items-center justify-between">
          <div>
            <a href="#" className="text-xl font-bold uppercase">
              playing /{" "}
              <span className="font-extralight text-white/70 uppercase">
                market
              </span>
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-4">
              {NabarMenue.map((nv) => (
                <li key={nv.id}>
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: "white",
                      zIndex: 2,
                      followSpeed: 1.5,
                      scale: 5,
                      mixBlendMode: "difference",
                    }}
                  >
                    <a
                      href={`${nv.link}`}
                      className="inline-block px-3 py-2 text-sm uppercase"
                    >
                      {nv.title}
                    </a>
                  </UpdateFollower>
                </li>
              ))}
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 2,
                  followSpeed: 1.5,
                  scale: 5,
                  mixBlendMode: "difference",
                }}
              >
                <button className="ps-14 text-lg">
                  <SlEarphones />
                </button>
              </UpdateFollower>
            </ul>
          </div>
          <div className="md:hidden">
            <MdMenu className="text-4xl" />
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
