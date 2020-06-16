import axios from "axios";
import { API_URL_AUTH } from "../config";
export const AuthService = formData => {
  return new Promise(async (resolve, reject) => {
    const response = await axios
      .post(`${API_URL_AUTH}login`, formData)
      .catch(e => {
        resolve({ status: false, message: "Login Failed!", error: e.response });
      });
    if (response && response.data) {
      localStorage.setItem("AuthToken", response.data);
    } else {
      localStorage.setItem("AuthToken", null);
    }
    resolve({ status: true, message: "Login Success!", token: response });
  });
};
