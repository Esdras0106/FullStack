import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <small>© {new Date().getFullYear()} Endereço da Empresa</small>
      </div>
    </footer>
  );
}