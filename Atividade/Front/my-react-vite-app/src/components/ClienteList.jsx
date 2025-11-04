import React, { useEffect, useState } from 'react';
import { listarClientes } from '../services/api';

function ClienteList() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    listarClientes().then(res => setClientes(res.data)).catch(console.error);
  }, []);

  return (
    <div>
      <ul>
        {clientes.map(c => (
          <li key={c.id}>
            <strong>{c.nome}</strong> — {c.email} — {c.telefone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClienteList;