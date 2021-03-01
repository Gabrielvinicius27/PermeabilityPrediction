// Serviço de configuração da API
import axios from 'axios';

// URL da API
const api = axios.create({
    baseURL: "http://127.0.0.1:5000/"
});

// Exporta a API para ser utilizada posteriormente
export default api;