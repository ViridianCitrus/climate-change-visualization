import React, { useState, useEffect } from "react";


import { ReactComponent as TriangleOpen } from "./images/triangleOpen.svg";
import { ReactComponent as TriangleClose } from "./images/triangleClose.svg";
import { Navbar } from "./Navbar";

import { geoToH3 } from "h3-js";
import { StaticMap } from "react-map-gl";

//@ts-ignore
import DeckGL from '@deck.gl/react';
//@ts-ignore
import { H3HexagonLayer } from '@deck.gl/geo-layers';
import tempdata from './testdata.json';

export const Report: React.FC = () => {
  const MAPBOX_TOKEN = "pk.eyJ1IjoiYmVuYWRyaWxsIiwiYSI6ImNrc21hajlrbzFqaGoydXBjOWlyOGl5cHIifQ.sTt3_tgmpDlBUOaPW7lTqg"

  // const [offsetHeight, setOffsetHeight] = useState(100);
  // const [sidebarOffset, setSidebarOffset] = useState(0);
  const [showType, changeShowType] = useState("None");
  const [searchField, changeSearchField] = useState("");
  const [toggleSidebar, toggleToggleSidebar] = useState(true);
  // const [viewport, setViewport] = useState({
  //   latitude: 43.6532,
  //   longitude: -79.3832,
  //   width: "75vw",
  //   height: "100vh",
  //   zoom: 10
  // })
  const layer = new H3HexagonLayer({
    id: 'h3-hexagon-layer',
    tempdata,
    pickable: true,
    wireframe: false,
    filled: true,
    extruded: true,
    elevationScale: 20,
    getHexagon: (d: any) => geoToH3(d.latitude, d.longitude, 0),
    getFillColor: (d: any) => [255, (1 - d.temp / 10) * 255, 0],
    getElevation: (d: any) => d.temp * 10
  })


  useEffect(() => {
    document.title = "Climate Report | Report";
  }, []);

  useEffect(() => {
    // TODO: get the right data type to display
  }, [showType]);


  const INITIAL_VIEW_STATE = {
    latitude: 43.6532,
    longitude: -79.3832,
    zoom: 13,
    pitch: 0,
    bearing: 0
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="reportPage">
        <div className="searchBar" style={{ top: `100px`, flex: 3.5 }}>
          {/* search bar */}
          <input
            type="text"
            placeholder="City/Place"
            value={searchField}
            onChange={(e) => changeSearchField(e.target.value)}
          />
          {/* timeline */}
        </div>
        <div>
          <DeckGL
            initialViewState={INITIAL_VIEW_STATE}
            controller={true}
            layers={[layer]}
          >
            <StaticMap mapboxApiAccessToken={MAPBOX_TOKEN} mapStyle={"mapbox://styles/benadrill/cksmdc7bynkzp17ly78uzonu7"} />
          </DeckGL>
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
