import React, { useEffect } from "react";
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
          <button style={{ marginRight: "50px", marginTop: "50px" }}>
            <p>Get Report</p>
          </button>
        </div>
      </div>
    </>
  );
};
