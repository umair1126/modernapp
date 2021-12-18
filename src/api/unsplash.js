import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID enAS2j7IrxjEaXIcxVRGDHo7fzroFh4RfNxWOd5UfBU",
  },
});
