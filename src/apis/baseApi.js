import axios from "axios";
// import authHeader from "./authHeader";

export default axios.create({
  baseURL: "https://apertum-interview.herokuapp.com/api",
});
