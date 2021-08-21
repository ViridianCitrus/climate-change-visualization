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
        <div>
          <h1>About</h1>
          <p></p>
          <p>"We cannot burn our way to the future. We cannot pretend the danger does not exist — or dismiss it because it affects someone else."</p>
          <p className="author">- Ban Ki-moon</p>
          <p>From melting ice caps to large fluctuating temperatures, climate change has wreaked havoc on our environment and taken hold of our world with its observable effects. This is largely due to the increasing greenhouse gases produced by human activities. Over the next century, the Intergovernmental Panel on Climate Change predicts a rise in temperature of 2.5 to 10 degrees Fahrenheit. This leads to the effects of climate change; intense heat waves, shrinking glaciers, ocean acidification, as well as the accelerated rise in sea level. As global warming increases, we inch closer and closer towards “tipping points”, where the damage becomes irreversible. However, switching to greener options and removing greenhouse gases can mitigate the adverse effects of human activities, ultimately keeping climate change under control.</p>
          <p>As our climate change worsens we'll see many changes to our world, but what will it look like where you live? How will it affect your friend from Saskatchewan? This website allows you to explore the effects of climate change around Canada in 3D! [NAME] aims to display the effects of climate change in one simple, user-friendly format. Using the [NAME] interface, users can manipulate the map view to explore the level of greenhouse emissions over the years in Canada.</p>
        </div>
      </div>
    </>
  );
};
