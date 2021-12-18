import axios from "axios";
import React, { useState, useEffect } from "react";

function Search() {
  const [term, setTerm] = useState("wikipedia");
  const [result, setResult] = useState([]);
  console.log("i run after every rerender");
  console.log(result);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResult(data.query.search);
    };

    if (term && !result.length) {
      search();
    } else {
      const timerId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 750);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [term]);

  const renderedList = result.map((item, index) => {
    return (
      <div className="item" key={index}>
        <div className="content">
          <div className="header">{item.title}</div>
          <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div className="ui segment">
      <form>
        <div className="ui input focus">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
        </div>
      </form>
      <div className="ui celled list">{renderedList}</div>
    </div>
  );
}

export default Search;
