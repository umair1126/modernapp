import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../../api/unsplash";

function Unplash() {
  const [images, setImages] = useState([]);
  const doSomething = async (term) => {
    const response = await unsplash.get(`/search/photos`, {
      params: { query: term },
    });
    setImages(response.data.results);
    console.log(response.data.results);
  };
  return (
    <div>
      <SearchBar onSubmitting={doSomething} />
      <ImageList images={images} />
    </div>
  );
}

export default Unplash;
