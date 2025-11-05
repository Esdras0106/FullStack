import React from 'react';
import ClienteList from '../../Lists/ClienteList.jsx'; // import correto (relativo)

export default function ListaClientes() {
  return (
    <div>
      <h2>Lista de Clientes</h2>
      <ClienteList />
    </div>
  );
}