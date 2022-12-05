import axios from "axios";

export const getShorterLInkAction = (url: String) => {
  return axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`);
};
