import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="brand">PAMONHAS</div>
        <nav className="nav-list">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/clientes/cadastro">Cadastro de Clientes</NavLink>
          <NavLink to="/produtos/cadastro">Cadastro de Produtos</NavLink>
          <NavLink to="/clientes">Lista de Clientes</NavLink>
          <NavLink to="/produtos">Lista de Produtos</NavLink>
        </nav>
      </div>
    </header>
  );
}