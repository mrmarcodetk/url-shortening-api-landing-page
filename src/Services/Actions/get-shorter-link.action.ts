import axios from "axios";

export const getShorterLInkAction = () => {
  return axios.get(
    "https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html"
  );
};
