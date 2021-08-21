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
          <button style={{ marginRight: "50px", marginTop: "50px" }}>
            <p>Let's get started</p>
          </button>
        </div>
        <div>
          <img src={ccLogo}/>
        </div>
      </div>
    </>
  );
};
