import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { UpdateFollower } from "react-mouse-follower";
import Hero from "./components/Hero/Hero";
import Servies from "./components/Servies/Servies";
import Banner from "./components/Banner/Banner";
import BannerText from "./components/Banner/BannerText";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Navbar />
        <Hero />
      </UpdateFollower>
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "black",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Servies />
      </UpdateFollower>
      <Banner />
      <BannerText />
      <Blogs />
    </main>
  );
}

export default App;
