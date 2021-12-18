import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Unplash from "./components/Pics/Unplash";

import Accordian from "./components/Widget/Accordian";
import Dropdown from "./components/Widget/Dropdown";
import Header from "./components/Header";
import Search from "./components/Widget/Search";
import Translate from "./components/Widget/Translate";
import Youtube from "./components/videos/Youtube";

const items = [
  {
    title: "Lahore, Pakistan",
    content:
      "Lahore is the capital of the Pakistani province of Punjab and is the country's 2nd largest city after Karachi",
  },

  {
    title: "Adelaide, Australia",
    content:
      "Adelaide is South Australia’s cosmopolitan coastal capital. Its ring of parkland on the River Torrens is home to renowned museums such as the Art Gallery of South Australia",
  },

  {
    title: "AuckLand",
    content:
      "Auckland, based around 2 large harbours, is a major city in the north of New Zealand’s North Island",
  },
];

const options = [
  {
    label: "Red color",
    value: "red",
  },

  {
    label: "Blue color",
    value: "blue",
  },

  {
    label: "Green color",
    value: "green",
  },
];

export default function App1() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="ui container" style={{ margin: "10px 0px" }}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path="/" element={<Accordian items={items} />} />
          <Route
            exact
            path="/dropdown"
            element={
              <div className="ui segment">
                <Dropdown
                  options={options}
                  selected={selected}
                  onSelectChange={setSelected}
                />
                <h4 style={{ color: selected.value }}>working or not?</h4>
              </div>
            }
          />
          <Route exact path="/translate" element={<Translate />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/unsplash" element={<Unplash />} />
          <Route exact path="/youtube" element={<Youtube />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
