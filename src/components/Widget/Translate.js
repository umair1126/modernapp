import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "Arabic",
    value: "ar",
  },

  {
    label: "Hindi",
    value: "hi",
  },

  {
    label: "chinese",
    value: "zh-CN",
  },

  {
    label: "Urdu",
    value: "ur",
  },

  {
    label: "spanish",
    value: "es",
  },
];

function Translate() {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="ui input">
          <label>
            Enter Something to Translate
            <input
              type="text"
              placeholder="English"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
        </div>
      </form>
      <br />
      <Dropdown
        selected={language}
        onSelectChange={setLanguage}
        options={options}
      />
      <br />
      <br />
      <Convert text={text} language={language} />
    </div>
  );
}

export default Translate;
