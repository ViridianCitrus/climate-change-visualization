import React, { useState, useEffect, useRef } from "react";

import { ReactComponent as TriangleOpen } from "./images/triangleOpen.svg";
import { ReactComponent as TriangleClose } from "./images/triangleClose.svg";
import { Navbar } from "./Navbar";

export const Report: React.FC = () => {
  const [offsetHeight, setOffsetHeight] = useState(100);
  const [sidebarOffset, setSidebarOffset] = useState(0);
  const [searchField, changeSearchField] = useState("");
  const [toggleSidebar, toggleToggleSidebar] = useState(true);

  useEffect(() => {
    document.title = "Climate Report | Report";
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="reportPage">
        <div
          className="searchBar"
          style={{ top: `${offsetHeight}px`, flex: 3.5 }}
        >
          {/* search bar */}
          <input
            type="text"
            placeholder="City/Place"
            value={searchField}
            onChange={(e) => changeSearchField(e.target.value)}
          />
          {/* timeline */}
        </div>
        <div
          className={`sidebar transition ${
            toggleSidebar ? "sidebarOpen" : "sidebarClosed"
          }`}
        >
          <div>
            {toggleSidebar ? (
              <TriangleOpen
                title="Close Options"
                onClick={() => toggleToggleSidebar(!toggleSidebar)}
              />
            ) : (
              <TriangleClose
                title="Open Options"
                style={{
                  paddingLeft: "10px",
                }}
                onClick={() => toggleToggleSidebar(!toggleSidebar)}
              />
            )}
          </div>
          <div
            className="sidebarToggle"
            style={{ display: toggleSidebar ? "initial" : "none" }}
          >
            <h2>Toggles</h2>
            <div>
              <label title="Temperature">
                <input
                  type="radio"
                  id="temperature"
                  name="toggle"
                  value="temperature"
                />{" "}
                Temperature
              </label>
              <br />
              <label title="Precipitation">
                <input
                  type="radio"
                  id="precipitation"
                  name="toggle"
                  value="precipitation"
                />{" "}
                Precipitation
              </label>
              <br />
              <label>
                <input type="radio" id="none" name="toggle" value="none" /> None
              </label>
              <br />
              <label title="None">
                <input type="radio" id="none" name="toggle" value="none" /> None
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
