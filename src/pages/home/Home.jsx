import React from "react";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "../trending/Trending";

function Home() {
  return (
    <div className="home page">
      <HeroBanner />
      <Trending />
      <div style={{ height: 1000 }} />
    </div>
  );
}

export default Home;
