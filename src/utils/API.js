import axios from "axios";

const BASEURL = "https://randomuser./api/?results=20";

const API = {
  search: function () {
    return axios.get(BASEURL);
  },
};

export default API;
