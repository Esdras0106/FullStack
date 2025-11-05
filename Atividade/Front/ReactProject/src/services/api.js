import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

// Clientes
export const criarCliente = (dados) => api.post('/Clientes', dados);
export const listarClientes = () => api.get('/Clientes');
export const buscarClientePorId = (id) => api.get(`/Clientes/${id}`);
export const atualizarCliente = (id, dados) => api.put(`/Clientes/${id}`, dados);
export const deletarCliente = (id) => api.delete(`/Clientes/${id}`);

// Produtos
export const criarProduto = (dados) => api.post('/Produtos', dados);
export const listarProdutos = () => api.get('/Produtos');
export const buscarProdutoPorId = (id) => api.get(`/Produtos/${id}`);
export const atualizarProduto = (id, dados) => api.put(`/Produtos/${id}`, dados);
export const deletarProduto = (id) => api.delete(`/Produtos/${id}`);

export default api;