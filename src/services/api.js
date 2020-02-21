import axios from "axios";

const api = axios.create({
  //   baseURL: "https://5e329d59b92d240014ea545c.mockapi.io/user"
  baseURL: "https://pokeapi.co/api/v2/"
});
export default api;
