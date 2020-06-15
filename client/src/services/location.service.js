import axios from "axios";
import { API_URL, token } from "../config";
export const getLocations = params => {
  return new Promise(async (resolve, reject) => {
    let page = params.status ? 0 : params.page;
    const response = await axios
      .get(`${API_URL}location/?device=${params.device}&page=${page}`, {
        headers: {
          Authorization: token
        }
      })
      .catch(e => reject(e));
    resolve(response);
  });
};
