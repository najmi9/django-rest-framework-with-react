import axios from "axios";
import { API_URL} from "./Config";

const REGISTER_URL = API_URL + "/users";


const resetPassword =async (data) =>{
  const response = await axios.post(REGISTER_URL+"/new-password", data);
  return await response;
}


const activate = async (code) => {
   const response = await axios.post(REGISTER_URL+"/account/activation", code);
   return await response
}

const register = async (user) => {
  const res = await axios.post(REGISTER_URL, user);
  return await res.data;
}

const sendEmailToUpdatePassword = async (data) => {
   const response = await axios.post(REGISTER_URL+"/forgot-password-request", data);
   return await response
}

const isCodeValid = async (code) => {
  const response = await axios.post(
    REGISTER_URL+"/reset-password/code/validation",
    code
  );
  return await response;
}

export default {
  register,
   activate,
  resetPassword,
  sendEmailToUpdatePassword,
  isCodeValid
}