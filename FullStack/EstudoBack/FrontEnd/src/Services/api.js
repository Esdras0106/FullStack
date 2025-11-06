import axios from 'axios';


// Confirguração de instância do axios com a URL base da API.
const api = axios.create({
    baseURL: 'http://localhost:3000',
});

export default api;