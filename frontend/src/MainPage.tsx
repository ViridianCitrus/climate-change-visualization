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

          <p style={{ marginTop: "36px" }}>See the change to your world</p>
          <a href="/report">
            <button
              style={{ marginRight: "50px", marginTop: "40px" }}
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
      <div className="about" id="about">
        <h2>About</h2>
        <p>
          As our <b>climate change</b> worsens we'll see many changes to our
          world, but what will it look like where you live?
          <br />
          <br /> How will it affect your friend from Vancouver?
          <br />
          <br /> This website allows you to explore the effects of climate
          change around the world in 3D!{" "}
        </p>
      </div>
      <div className="why" id="why">
        <h2>Why?</h2>
        <p>
          Over the next century, the IPCC predicts a rise in temperature of 1.4
          to 5.5 degrees Celsius. This is largely due to the increasing
          greenhouse gases produced by human activities.
        </p>
        <p style={{ maxWidth: "820px" }}>
          "We cannot burn our way to the future. We cannot pretend the danger
          does not exist - or dismiss it because it affects someone else."
        </p>
        <p style={{ maxWidth: "820px" }} className="author">
          - Ban Ki-moon
        </p>
        <img
          style={{
            maxWidth: "900px",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
          src={"wildfireCrop.jpg"}
          alt="wildfire_image"
        />
        <p>
          This leads to the effects of climate change; intense heat waves,
          shrinking glaciers, ocean acidification, as well as the accelerated
          rise in sea level. As global warming increases, we inch closer and
          closer towards “tipping points”, where the damage becomes
          irreversible. However, switching to greener options and removing
          greenhouse gases can mitigate the adverse effects of human activities,
          ultimately keeping climate change under control.
        </p>
      </div>
    </>
  );
};
