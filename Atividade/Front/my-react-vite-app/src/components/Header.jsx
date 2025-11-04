import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? '#fff' : '#9ec5ff',
    textDecoration: 'none',
    display: 'block',
    padding: '6px 0'
  });

  return (
    <header style={{ background: '#282c34', padding: '1rem' }}>
      <nav style={{ maxWidth: 960, margin: '0 auto' }}>
        <NavLink to="/" style={linkStyle}>Home</NavLink>
        <NavLink to="/clientes/cadastro" style={linkStyle}>Cadastro de Clientes</NavLink>
        <NavLink to="/produtos/cadastro" style={linkStyle}>Cadastro de Produtos</NavLink>
        <NavLink to="/clientes" style={linkStyle}>Lista de Clientes</NavLink>
        <NavLink to="/produtos" style={linkStyle}>Lista de Produtos</NavLink>
      </nav>
    </header>
  );
}