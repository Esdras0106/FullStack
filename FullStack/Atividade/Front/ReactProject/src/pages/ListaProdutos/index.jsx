import React, { useEffect, useState } from 'react';

function formatDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  if (!isNaN(d.getTime())) {
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  }
  const parts = String(iso).split('-');
  if (parts.length === 3) return `${parts[2]}/${parts[1]}/${parts[0]}`;
  return String(iso);
}

export default function ListaProdutos() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('produtos') || '[]');
      setItems(Array.isArray(stored) ? stored : []);
    } catch {
      setItems([]);
    }
  }, []); // somente uma vez

  return (
    <div className="page">
      <div className="content">
        <div className="container">
          <h2 className="page-title">Lista de Produtos</h2>
          <ul className="list">
            {items.length === 0 && <div className="empty">Nenhum produto cadastrado.</div>}
            {items.map(p => (
              <li key={p.id ?? `${p.nome}-${p.lote}`}>
                <span className="item-name"><strong>{p.nome}</strong></span>
                <span className="item-meta"> — Lote: {p.lote} — Validade: {formatDate(p.validade)} — Quantidade: {p.quantidade}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}