import axios from "axios";
export const getRequest = async (url, payload) => {
  try {
    let data = await axios.post(url, payload);
    return data.data;
  } catch {
    return null;
  }
};

// export const setData = async (url, payload) => {
//   try {
//     let data = await axios.post(url, payload);
//     return data.data;
//   } catch {
//     return null;
//   }
// };
