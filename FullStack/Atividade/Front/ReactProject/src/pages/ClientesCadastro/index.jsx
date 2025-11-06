// ...existing code...
import React, { useState } from 'react';

export default function ClientesCadastro() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const lista = JSON.parse(localStorage.getItem('clientes') || '[]');
    lista.push({ id: Date.now(), ...form });
    localStorage.setItem('clientes', JSON.stringify(lista));
    setForm({ nome: '', email: '', telefone: '' });
  }

  return (
    <div className="page">
      <div className="content">
        <div className="form-card">
          <h2 className="page-title">Cadastro de Cliente</h2>

          <form className="form" onSubmit={handleSubmit}>
            <div className="form-grid two-cols">
              <div>
                <label>Nome</label>
                <input name="nome" value={form.nome} onChange={handleChange} />
              </div>
              <div>
                <label>Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} />
              </div>
            </div>

            <div className="form-grid">
              <div>
                <label>Telefone</label>
                <input name="telefone" value={form.telefone} onChange={handleChange} />
              </div>
            </div>

              
            <div className="form-grid">
              <div>
                <label>Endereço'</label>
                <input name="endereco" value={form.endereco} onChange={handleChange} />
              </div>
            </div>


            <div className="form-actions">
              <button className="btn-primary" type="submit">Salvar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
// ...existing code...