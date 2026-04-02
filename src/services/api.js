import axios from "axios";

const API = axios.create({
  baseURL: "https://eecommercebackend-production-e850.up.railway.app/api"
});

export default API;
