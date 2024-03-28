import axios from "axios";
import { ApiExcuseType, NewExcuseType } from "../Types/ApiExcuseType";
import { ApiHttpCodeExcuseType } from "../Types/HttpCodeExcuseType";

const api_url = "http://localhost:5000";

// Recup des excuses aleatoires
export async function getRandomExcuse() {
  const res: ApiExcuseType = await axios.get(`${api_url}/api/randomExcuse`);
  return res;
}

export async function getAllExcuses() {
  const res: ApiHttpCodeExcuseType = await axios.get(
    `${api_url}/api/allExcuses`
  );

  return res.data;
}

export async function createNewExcuse(element: NewExcuseType) {
  console.log("je suis dans excuseApi", element);
  try {
    console.log("je suis dans le try de la function createNewExcuse");
    const response = await axios.post(`${api_url}/api/addExcuse`, element);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la création de l'excuse :",
      error
    );
    throw error; // Vous pouvez choisir de relancer l'erreur ou de la gérer différemment ici
  }
}
