import axios from "axios";
import { useEffect, useState } from "react";

function Custom() {
  const [state, setState] = useState("");
  useEffect(() => {
    const jokes = async () => {
      const { data } = await axios.get(
        "http://api.icndb.com/jokes/random?firstName=John&lastName=Doe",
        {}
      );
      setState(data.value.joke);
      console.log(data);
    };
    jokes();
  }, []);
  return state;
}

export default Custom;
