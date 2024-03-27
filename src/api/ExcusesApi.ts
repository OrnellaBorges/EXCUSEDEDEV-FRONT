import axios from "axios";
import { ApiExcuseType } from "../types/ApiExcuseType";
//const url = "https://data.latelier.co/training/tennis_stats/headtohead.json";

//debut de l'url
const api_url = "http://localhost:5000";
//import { config } from "../../config";

// creer une fonction qui fetch vers l'api
export async function getRandomExcuse() {
  //console.log("je suis dans api");
  const res: ApiExcuseType = await axios.get(`${api_url}/api/excuses/random`);
  //console.log("response from api", res);
  return res;
}

export async function getAllExcuses() {
  //console.log("je suis dans api");
  const res = await axios.get(`${api_url}/api/excuses`);
  //console.log("response from api", res);
  return res;
}

// creer une excuse
export async function createOneExcuse(datas: string) {
  //console.log("datas", datas);
  return axios
    .post(`${api_url}/api/excuses/create`, datas)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}
