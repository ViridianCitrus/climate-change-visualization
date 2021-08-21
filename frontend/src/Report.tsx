import React, { useEffect } from "react";
import { Navbar } from "./Navbar";

export const Report: React.FC = () => {
  useEffect(() => {
    document.title = "Climate Report | Report";
  }, []);

  return (
    <>
      <Navbar />
      <p>Report</p>
    </>
  );
};
