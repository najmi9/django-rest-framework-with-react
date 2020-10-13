import axios from "axios";
//import jwtDecode from "jwt-decode";
import { API_URL} from "../Config";
//import Cache from './Cache';

const LOGIN_API = API_URL+"/token/";
//const REGISTER_URL = API_URL + "/register";
 

function logout() {
    localStorage.clear();
    delete axios.defaults.headers["Authorization"];
}


function authenticate(credentials) {
  return axios
    .post(LOGIN_API, credentials)
    .then(response => response.data)
    .then(data => {
    console.log(data)
         window.localStorage.setItem("authToken", data.access);
         window.localStorage.setItem("authRefreshToken", data.refresh);
         setAxiosToken(data.access);
      
    });
}


function setAxiosToken(token) {
  axios.defaults.headers["Authorization"] = "Bearer " + token;
}


const setup = async () => {
  let token = window.localStorage.getItem("authToken");    
  if (token) {  
    setAxiosToken(token);  
  }
}

const isAuthenticated = () => {
  let token = window.localStorage.getItem("authToken")||null;
  if (!token) {
         return false;
    }
  return true;
}


export {
  authenticate,
  logout,
  setup,
  isAuthenticated
};