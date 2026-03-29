import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommercebackend-production-e850.up.railway.app/api"
});

export default API;
