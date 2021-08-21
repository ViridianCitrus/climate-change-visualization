import React, { useEffect } from "react";

import { ReactComponent as FrontPageImage } from "./images/frontpage.svg";
import { Navbar } from "./Navbar";
import ccLogo from "./images/globalWarming.svg";

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
        <div>
          <img src={ccLogo} />
        </div>
      </div>
    </>
  );
};
