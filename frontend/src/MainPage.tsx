import React, { useEffect } from "react";

export const MainPage: React.FC = () => {
  useEffect(() => {
    document.title = "Climate Report | Main";
  }, []);

  return (
    <>
      <p>Main Page</p>
    </>
  );
};
