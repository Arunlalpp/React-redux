import React from "react";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "../trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

function Home() {
  return (
    <div className="home page">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
      <Trending />
      <div style={{ height: 1000 }} />
    </div>
  );
}

export default Home;
