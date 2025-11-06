import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

// Clientes
export const criarCliente = (dados) => api.post('/Clientes', dados);
export const listarClientes = () => api.get('/Clientes');


// Produtos
export const criarProduto = (dados) => api.post('/Produtos', dados);
export const listarProdutos = () => api.get('/Produtos');


export default api;