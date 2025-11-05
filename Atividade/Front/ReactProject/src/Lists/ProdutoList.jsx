
import React, { useEffect, useState } from 'react';

import { listarProdutos } from '../services/api';


function ProdutoList() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    let mounted = true;
    listarProdutos()
      .then(res => { if (mounted) setProdutos(res.data) })
      .catch(err => {
        console.error('Erro ao listar produtos:', err);
        if (mounted) setProdutos([]);
      });
    return () => { mounted = false; };
  }, []);

  return (
    <div>
      <ul>
        {produtos.map(p => (
          <li key={p.id}>
            <strong>{p.nome}</strong> — Lote: {p.lote} — Validade: {p.validade} — Quantidade: {p.quantidade}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProdutoList;