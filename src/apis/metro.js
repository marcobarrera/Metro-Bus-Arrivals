import axios from "axios";

export default axios.create({
  baseURL: "https://api.metro.net/agencies/lametro/routes/",
});
