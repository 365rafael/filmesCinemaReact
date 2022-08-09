//BASEurl: https://api.themoviedb.org/3/

//ROTAS: movie/now_playing?api_key=59bb18419f7189b42f207f6b1084526a&language=pt-BR

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
