import React, { useState, useEffect } from "react";
import { Slider } from "rsuite";

import { ReactComponent as TriangleOpen } from "./images/triangleOpen.svg";
import { ReactComponent as TriangleClose } from "./images/triangleClose.svg";
import { Navbar } from "./Navbar";

export const Report: React.FC = () => {
  // const [offsetHeight, setOffsetHeight] = useState(100);
  // const [sidebarOffset, setSidebarOffset] = useState(0);
  const [showType, changeShowType] = useState("None");
  const [searchField, changeSearchField] = useState("");
  const [toggleSidebar, toggleToggleSidebar] = useState(true);
  const [sliderValue, setSliderValue] = useState(2020);

  useEffect(() => {
    document.title = "Climate Report | Report";
  }, []);

  useEffect(() => {
    // TODO: get the right data type to display
  }, [showType]);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="reportPage">
        <div className="searchBar" style={{ flex: 3.5 }}>
          <div style={{ top: `100px`, flex: 1 }}>
            {/* search bar */}
            <input
              type="text"
              placeholder="City/Place"
              value={searchField}
              onChange={(e) => changeSearchField(e.target.value)}
            />
          </div>
          {/* timeline */}
          <div
            style={{
              top: `100px`,
              flex: 1,
              display: "grid",
            }}
          >
            <div
              className="slider"
              style={{
                padding: "36px",
                paddingLeft: "48px",
                paddingRight: "48px",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                marginTop: "auto",
              }}
            >
              {/* TODO: arrow buttons */}
              <Slider
                defaultValue={2020}
                step={1}
                graduated
                progress
                min={1950}
                max={2050}
                value={sliderValue}
                onChange={(e) => {
                  setSliderValue(e);
                }}
                renderMark={(mark) => {
                  const times = [];
                  for (let i = 1950; i < 2051; i += 10) {
                    times.push(i);
                  }
                  if (times.includes(mark)) {
                    return <span>{mark}</span>;
                  }
                  return null;
                }}
              />
            </div>
          </div>
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
                style={{
                  marginRight: "20px",
                }}
                onClick={() => toggleToggleSidebar(!toggleSidebar)}
              />
            ) : (
              <TriangleClose
                title="Open Options"
                onClick={() => toggleToggleSidebar(!toggleSidebar)}
              />
            )}
          </div>
          <div
            className="sidebarToggle"
            style={{ display: toggleSidebar ? "initial" : "none" }}
          >
            <h2>Toggles</h2>
            <div
              className="toggleRadio"
              onChange={(e: any) => changeShowType(e.target.value)}
            >
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
