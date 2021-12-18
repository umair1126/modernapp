import React from "react";
import Custom from "./components/Custom/Custom";

function App3() {
  const joke = Custom();
  console.log("this is joke: ", joke);
  return (
    <div>
      <h1>this is joke</h1>
      <h3>{joke}</h3>
      <button>Update Joke</button>
    </div>
  );
}

export default App3;
