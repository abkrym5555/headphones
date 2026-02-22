import { motion } from "motion/react";
import { UpdateFollower } from "react-mouse-follower";
import CreditCards from "../../assets/credit-cards.webp";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

function Footer() {
  return (
    <UpdateFollower
      mouseOptions={{
        backgroundColor: "black",
        zIndex: 999,
        followSpeed: 0.5,
        scale: 1,
      }}
    >
      <footer className="bg-primary pt-12 pb-8 text-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {/* playing  */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold uppercase">Playing</h1>
              <p className="max-w-75 text-sm">
                orem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
                ratione quidem libero, praesentium ab atque? Quidem maxime,
                numquam dolores
              </p>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  {" "}
                  <FaPhone /> +1 (123) 456-7890
                </p>
                <p className="flex items-center gap-2">
                  {" "}
                  <FaMapLocation /> Noida, Uttar Pradesh
                </p>
              </div>
            </motion.div>
            {/* links */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold capitalize"> Quick Links</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </motion.div>
            {/* follow us */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold capitalize"> Follow Us</h1>
              <div className="flex items-center gap-3">
                <FaFacebook className="text-3xl duration-300 hover:scale-105 hover:cursor-pointer" />
                <FaInstagram className="text-3xl duration-300 hover:scale-105 hover:cursor-pointer" />
                <FaTelegram className="text-3xl duration-300 hover:scale-105 hover:cursor-pointer" />
                <FaGoogle className="text-3xl duration-300 hover:scale-105 hover:cursor-pointer" />
              </div>
              <div className="space-y-2">
                <h3>Payment Methods</h3>
                <img className="w-[80%]" src={CreditCards} alt="credit cards" />
              </div>
            </motion.div>
          </div>
          {/* copy right */}
          <p className="mt-8 border-t-2 pt-8 text-center">
            © 2026. All Rights Reserved || mohamed
          </p>
        </div>
      </footer>
    </UpdateFollower>
  );
}

export default Footer;
