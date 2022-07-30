import React, { useState } from "react";
import Images from "../components/images";
import Navbar from "../components/navbar";

function Home() {
  const [ham, setHam] = useState(false);
  return (
    <div className="main-home">
      <div className="navbar-sec">
        <i className="fas fa-bars h1-text" onClick={() => setHam(!ham)}></i>
        <Navbar ham={ham} setHam={setHam} />
      </div>
      <div className="main-head">
        <span className="head-first">Unfold the</span>
        <br />
        <span className="head-second"> beautiful Stories</span>
      </div>
      <div className="image-sec">
        <Images />
      </div>
    </div>
  );
}

export default Home;
