import React, { useEffect } from "react";

export const Report: React.FC = () => {
  useEffect(() => {
    document.title = "Climate Report | Report";
  }, []);

  return (
    <>
      <p>Report</p>
    </>
  );
};
