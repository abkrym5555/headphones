import { UpdateFollower } from "react-mouse-follower";
import Headphone4 from "../../assets/headphone4.png";
import { easeInOut, motion } from "motion/react";
import { fedup } from "../Servies/Servies";
function Banner() {
  return (
    <section>
      <div className="container grid grid-cols-1 justify-items-center gap-12 space-y-6 py-14 md:grid-cols-2">
        {/* image */}
        <div>
          <motion.img
            initial={{ opacity: 0, x: -100, rotate: -180 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeInOut }}
            className="w-75 md:w-100"
            src={Headphone4}
            alt="headphone"
          />
        </div>
        {/* text */}
        <div className="flex flex-col justify-center">
          <div className="max-w-112.5 space-y-4 text-center md:text-left">
            <motion.h1
              variants={fedup(0.7)}
              initial="hidden"
              whileInView="show"
              className="font-Poppins text-3xl font-semibold lg:text-4xl"
            >
              The Latest Headphones With The Latest Technology
            </motion.h1>
            <motion.p variants={fedup(0.9)} initial="hidden" whileInView="show">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
              incidunt!
            </motion.p>
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 6756,
                followSpeed: 0.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <motion.button
                variants={fedup(1.3)}
                initial="hidden"
                whileInView="show"
                className="rounded-md border-2 px-6 py-2 text-red-600 duration-100 hover:bg-red-600 hover:text-white"
              >
                Shope Now
              </motion.button>
            </UpdateFollower>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
