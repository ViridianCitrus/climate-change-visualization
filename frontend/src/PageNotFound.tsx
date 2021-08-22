import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import { ReactComponent as GraphicNotFound } from "./images/notFound.svg";

export const PageNotFound: React.FC = () => {
  useEffect(() => {
    document.title = "Degrees of Change | 404";
  }, []);

  return (
    <>
      <Navbar />
      <div className="error-page">
        {/* <div style={{width: "30vh"}}></div> */}
        <GraphicNotFound />
        <h1 style={{ fontWeight: "normal" }}>Error 404</h1>
        <a href="/#">Go Back</a>
      </div>
    </>
  );
};
