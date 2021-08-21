import React, { useEffect } from "react";

export const PageNotFound: React.FC = () => {
  useEffect(() => {
    document.title = "Climate Report | 404";
  }, []);

  return (
    <>
      <p>Error 404</p>
    </>
  );
};
