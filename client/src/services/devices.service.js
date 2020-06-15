import axios from "axios";
import { API_URL, token } from "../config";
export const getDeviceList = () => {
  return new Promise(async (resolve, reject) => {
    const response = await axios
      .get(`${API_URL}device`, {
        headers: {
          Authorization: token
        }
      })
      .catch(e => reject(e));
    resolve(response);
  });
};
