import axios from "axios";
axios.create({
  baseURL: 'http://localhost:4000/api',
  withCredentials: true
})

export default instance





// import { API_URL } from "../config";


// const instance = axios.create({
//   baseURL: API_URL,
//   withCredentials: true,
// });

// export default instance;