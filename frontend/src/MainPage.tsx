import React, { useEffect } from "react";

import { ReactComponent as FrontPageImage } from "./images/frontpage.svg";
import { Navbar } from "./Navbar";

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
          <p>See the change to your world</p>
          <a href="/report">
            <button
              style={{ marginRight: "50px", marginTop: "50px" }}
              className="transition"
              title="Get Report"
            >
              <p>Get Report</p>
            </button>
          </a>
        </div>
        <div style={{ paddingLeft: "20vw", paddingTop: "15vh" }}>
          <FrontPageImage />
        </div>
      </div>
      <div className="about">
        <h2 style={{ fontWeight: "normal", fontSize: "36px" }}>About</h2>
        <p style={{ fontSize: "32px", maxWidth: "960px", lineHeight: 1.4 }}>
          As our <b>climate change</b> worsens we'll see many changes to our
          world, but what will it look like where you live?
          <br />
          <br /> How will it affect your friend from Vancouver?
          <br />
          <br /> This website allows you to explore the effects of climate
          change around the world in 3D!{" "}
        </p>
      </div>
    </>
  );
};
