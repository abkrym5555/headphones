import { useState } from "react";
import Headphone1 from "../../assets/headphone.png";
import Headphone2 from "../../assets/headphone2.png";
import Headphone3 from "../../assets/headphone3.png";
import Headphone4 from "../../assets/headphone4.png";
import { FaWhatsapp } from "react-icons/fa";
import { AnimatePresence, easeInOut } from "motion/react";
import { motion } from "motion/react";
import { UpdateFollower } from "react-mouse-follower";

const fedup = (delay) => ({
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: delay,
      ease: easeInOut,
    },
  },
  exit: {
    opacity: 0,
    y: 0,
    scale: 0.5,
    transition: {
      duration: 0.2,
      ease: easeInOut,
    },
  },
});
const headPhonesData = [
  {
    id: 1,
    image: Headphone1,
    title: "Headphones Wireless",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis delectus nostrum quod, dolor inventore numquam obcaecati! Mollitia ipsum hic adipisci? ",
    price: "$100",
    model: "Model Brown",
    bgColor: "#8b5958",
  },
  {
    id: 2,
    image: Headphone2,
    title: "Headphones Wireless 2",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis delectus nostrum quod, dolor inventore numquam obcaecati! Mollitia ipsum hic adipisci? ",
    price: "$100",
    model: "Lima Green",
    bgColor: "#638153",
  },
  {
    id: 3,
    image: Headphone3,
    title: "Headphones Wireless 3",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis delectus nostrum quod, dolor inventore numquam obcaecati! Mollitia ipsum hic adipisci? ",
    price: "$100",
    model: "Ocean blue",
    bgColor: "#5d818c",
  },
];
function Hero() {
  const [activeDatat, setActiveDatat] = useState(headPhonesData[0]);

  const handelActiveData = (data) => {
    setActiveDatat(data);
  };
  return (
    <section className="bg-brandDark font-varela text-white">
      <div className="container grid min-h-175 grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center py-4 md:py-0 xl:max-w-125">
          <div className="space-y-5 text-center md:text-left">
            <AnimatePresence mode="wait">
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 0.5,
                  scale: 10,
                  rotate: 720,
                  mixBlendMode: "difference",
                }}
              >
                <motion.h1
                  key={activeDatat.id}
                  variants={fedup(0.2)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="font-varela text-3xl font-bold lg:text-6xl"
                >
                  {activeDatat.title}
                </motion.h1>
              </UpdateFollower>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={activeDatat.id}
                variants={fedup(0.3)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="text-sm leading-loose text-white/80"
              >
                {activeDatat.subtitle}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: activeDatat.bgColor,
                  zIndex: 999,
                  followSpeed: 0.5,
                  scale: 5,
                  rotate: 720,
                  backgroundElement: (
                    <div style={{ width: "100%" }}>
                      <img src={activeDatat.image} alt="..." />
                    </div>
                  ),
                }}
              >
                <motion.button
                  key={activeDatat.id}
                  variants={fedup(0.3)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  style={{ backgroundColor: activeDatat.bgColor }}
                  className="inline-block rounded-sm px-4 py-2 font-normal"
                >
                  Buy and Listen
                </motion.button>
              </UpdateFollower>
            </AnimatePresence>
            <div className="mt-24 flex items-center justify-center gap-4 md:justify-start">
              <div className="h-px w-20 bg-white"></div>
              <p className="text-sm uppercase">Top Headphones for you</p>
              <div className="h-px w-20 bg-white"></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {headPhonesData.map((item) => (
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: item.bgColor,
                    zIndex: 999,
                    followSpeed: 0.5,
                    scale: 5,
                    text: "View Details",
                    textFontSize: "3px",
                  }}
                >
                  <div
                    className="grid cursor-pointer grid-cols-2 place-items-center"
                    onClick={() => handelActiveData(item)}
                  >
                    <div key={item.id} className="">
                      <img
                        src={item.image}
                        alt={`head Phones ${item.id}`}
                        className="w-52"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-base font-bold">{item.price}</p>
                      <p className="text-xs font-normal text-nowrap">
                        {item.model}
                      </p>
                    </div>
                  </div>
                </UpdateFollower>
              ))}
            </div>
          </div>
        </div>
        {/* active headphones */}
        <div className="flex flex-col justify-end overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeDatat.id}
              initial={{ opacity: 0, scale: 0.9, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 100,
                transition: { duration: 0.2 },
              }}
              transition={{ duration: 0.4, delay: 0.2, ease: easeInOut }}
              src={activeDatat.image}
              alt="active head phones"
              className="w-75 md:w-100 xl:w-lg"
            />
          </AnimatePresence>
        </div>
        {/* whatsapp icon */}
        <div className="fixed right-10 bottom-10 z-999 text-3xl text-white mix-blend-difference duration-500 hover:rotate-360">
          <a href="#">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
