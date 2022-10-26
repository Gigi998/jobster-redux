import axios from "axios";

//root url
const customFetch = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});
export default customFetch;
