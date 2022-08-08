import axios from "axios";

const intance = axios.create({ baseURL: "https://pokeapi.co/api/v2/pokemon/" });

export default intance;
