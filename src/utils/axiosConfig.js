export const base_url = "http://localhost:5000/api";

const getTokenFromLocalStorage =  localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).token : null;


export const config = {
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage !== null ? getTokenFromLocalStorage : ""}`,
    Accept: "application/json",
  },
};