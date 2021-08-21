import React, { useEffect } from "react";
import { Navbar } from "./Navbar";

export const MainPage: React.FC = () => {
  useEffect(() => {
    document.title = "Climate Report | Main";
  }, []);

  return (
    <>
      <Navbar />
      <p>Main Page</p>
    </>
  );
};
