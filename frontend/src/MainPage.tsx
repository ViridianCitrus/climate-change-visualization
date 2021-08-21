import React, { useEffect } from "react";

export const MainPage: React.FC = () => {
  useEffect(() => {
    document.title = "Climate Report | Report";
  }, []);

  return (
    <>
      <p>Main Page</p>
    </>
  );
};
