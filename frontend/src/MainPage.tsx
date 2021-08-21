import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import ccLogo from "./images/globalWarming.svg"

export const MainPage: React.FC = () => {
  useEffect(() => {
    document.title = "Climate Report | Home";
  }, []);

  return (
    <>
      <Navbar />
      <div className="home overlay">
        <div>
          <h1>Climate Report</h1>
          <p>See the change to our world</p>
          <button style={{ marginRight: "50px", marginTop: "50px" }} className="start-button">
            <p>Let's get started</p>
          </button>
        </div>
        <div>
          <img src={ccLogo}/>
        </div>
      </div>
      <div className="about">
        <div>
          <h1>About</h1>
          <p>As our climate change worsens we'll see many changes to our world, but what will it look like where you live? How will it affect your friend from France? This website allows you to explore the effects of climate change around the world in 3D! </p>
          <p>We cannot burn our way to the future. We cannot pretend the danger does not exist — or dismiss it because it affects someone else. </p>
          <p>- Ban Ki-moon</p>
        </div>
      </div>
    </>
  );
};
