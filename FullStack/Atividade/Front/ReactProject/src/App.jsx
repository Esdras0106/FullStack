// ...existing code...
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ClientesCadastro from './pages/ClientesCadastro';
import ListaClientes from './pages/ListaClientes';
import ProdutosCadastro from './pages/ProdutosCadastro';
import ListaProdutos from './pages/ListaProdutos';

export default function App(){
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clientes/cadastro" element={<ClientesCadastro />} />
          <Route path="/clientes" element={<ListaClientes />} />
          <Route path="/produtos/cadastro" element={<ProdutosCadastro />} />
          <Route path="/produtos" element={<ListaProdutos />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
