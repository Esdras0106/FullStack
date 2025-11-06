import React, { useEffect, useState } from 'react';

export default function ListaClientes() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('clientes') || '[]');
      setItems(Array.isArray(stored) ? stored : []);
    } catch {
      setItems([]);
    }
  }, []); // somente uma vez

  return (
    <div className="page">
      <div className="content">
        <div className="container">
          <h2 className="page-title">Lista de Clientes</h2>
          <ul className="list">
            {items.length === 0 && <div className="empty">Nenhum cliente cadastrado.</div>}
            {items.map(c => (
              <li key={c.id ?? c.email}>
                <span className="item-name"><strong>{c.nome}</strong></span>
                <span className="item-meta"> — {c.email} — {c.telefone}</span>
                <span className='item-endereco'>{c.endereco}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}