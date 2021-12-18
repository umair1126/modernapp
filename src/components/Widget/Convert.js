import axios from "axios";
import React, { useEffect, useState } from "react";

function Convert({ text, language }) {
  const [result, setResult] = useState("");
  useEffect(() => {
    const translate = async () => {
      const { data } = await axios.get(
        "https://translation.googleapis.com/language/translate/v2",
        {
          params: {
            q: text,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setResult(data.data.translations[0].translatedText);
    };
    const timeId = setTimeout(() => {
      if (text) {
        translate();
      }
    }, 750);
    return () => {
      clearTimeout(timeId);
    };
  }, [text, language]);
  return (
    <div>
      <h3>Output:</h3>
      <h3>{result}</h3>
    </div>
  );
}

export default Convert;
