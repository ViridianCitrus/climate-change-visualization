import React, { useState, useEffect } from "react";
import { Slider, Input, InputGroup, Icon } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

import { ReactComponent as TriangleOpen } from "./images/triangleOpen.svg";
import { ReactComponent as TriangleClose } from "./images/triangleClose.svg";
import { Navbar } from "./Navbar";

import { geoToH3 } from "h3-js";
//@ts-ignore
import ReactMapGL from "react-map-gl";

//@ts-ignore
import DeckGL from "@deck.gl/react";
//@ts-ignore
import { H3HexagonLayer } from "@deck.gl/geo-layers";
import tempdata from "./tempdata.json";

export const Report: React.FC = () => {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiYmVuYWRyaWxsIiwiYSI6ImNrc21hajlrbzFqaGoydXBjOWlyOGl5cHIifQ.sTt3_tgmpDlBUOaPW7lTqg";

  const [showType, changeShowType] = useState("None");
  const [searchResult, changeSearchResult] = useState([
    "asdfdfadsfasfasdf",
    "asdf",
  ]);
  const [searchField, changeSearchField] = useState("");
  const [currentCity, changeCurrentCity] = useState("");
  const [toggleSidebar, toggleToggleSidebar] = useState(true);
  const [sliderValue, setSliderValue] = useState(2019);


  //@ts-ignore
  var showndata = tempdata.filter((obj: any) => obj.year === sliderValue)

  const layer = new H3HexagonLayer({
    id: "h3-hexagon-layer",
    data: showndata,
    pickable: true,
    wireframe: false,
    filled: true,
    extruded: true,
    elevationScale: 25000,
    getHexagon: (d: any) => geoToH3(d.latitude, d.longitude, 5),
    getFillColor: (d: any) => [255, (1 - d.mean_temp / 5) * 255, 0],
    getElevation: (d: any) => d.mean_temp,
  });

  useEffect(() => {
    document.title = "Degrees of Change | Report";
    // get from json
    fetch("./station_id.json").then((data) =>
      console.log(JSON.stringify(data))
    );
  }, []);

  useEffect(() => {
    // TODO: get the right data type to display
  }, [showType]);
  useEffect(() => {
    // goto city
  }, [currentCity]);

  const search = (e: string) => {
    changeSearchField(e);
    // check with filter
  };

  const decrease = () => {
    // check bounds
    if (sliderValue - 1 > 1900) setSliderValue(sliderValue - 1);
  };
  const increase = () => {
    // check bounds
    if (sliderValue + 1 < 2019) setSliderValue(sliderValue + 1);
  };

  const INITIAL_VIEW_STATE = {
    latitude: 43.6532,
    longitude: -79.3832,
    zoom: 5,
    pitch: 30,
    bearing: 0,
  };

  return (
    <div style={{ backgroundColor: "#221c33" }}>
      <div>
        <Navbar />
      </div>
      <div className="reportPage">
        <div className="searchBar" style={{ flex: 3.5 }}>
          <div style={{ top: `100px`, flex: 1 }}></div>
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
                display: "grid",
                zIndex: 100,
              }}
            >
              {/* TODO: arrow buttons */}
              <TriangleClose
                title="Decrease Year"
                className="triangleYear"
                style={{
                  marginRight: "20px",
                  filter: "brightness(0) invert(1)",
                }}
                onClick={decrease}
              />
              <div />
              <div>
                <Slider
                  defaultValue={2020}
                  step={1}
                  graduated
                  progress
                  min={1900}
                  max={2019}
                  value={sliderValue}
                  onChange={(e) => {
                    setSliderValue(e);
                  }}
                  renderMark={(mark) => {
                    const times = [];
                    for (let i = 1900; i < 2051; i += 10) {
                      times.push(i);
                    }
                    if (times.includes(mark)) {
                      return <span>{mark}</span>;
                    }
                    return null;
                  }}
                />
              </div>
              <div />
              <TriangleOpen
                title="Increase Year"
                className="triangleYear"
                style={{
                  marginLeft: "20px",
                  filter: "brightness(0) invert(1)",
                }}
                onClick={increase}
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
            style={{ display: toggleSidebar ? "flex" : "none" }}
          >
            <div
              style={{ width: "80%", flex: 1, paddingTop: "100px" }}
              className="searchBarEnd"
            >
              <InputGroup>
                <Input
                  value={searchField}
                  onChange={(e) => search(e)}
                  type="string"
                  placeholder="City/Place"
                />
                <InputGroup.Button>
                  <Icon icon="search" />
                </InputGroup.Button>
              </InputGroup>
              {searchField
                ? searchResult.map((res) => {
                    return (
                      <p
                        onClick={() => {
                          changeCurrentCity(res);
                          changeSearchField("");
                        }}
                      >
                        {res}
                      </p>
                    );
                  })
                : null}
            </div>
            <div style={{ flex: 1 }}>
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
                <label title="None">
                  <input type="radio" id="none" name="toggle" value="none" />{" "}
                  None
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <DeckGL
          initialViewState={INITIAL_VIEW_STATE}
          controller={true}
          layers={[layer]}
        >
          <ReactMapGL
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle={"mapbox://styles/benadrill/cksmdc7bynkzp17ly78uzonu7"}
          />
        </DeckGL>
      </div>
    </div>
  );
};
