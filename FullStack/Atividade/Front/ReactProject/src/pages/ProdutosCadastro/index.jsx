// ...existing code...
import React, { useState } from 'react';

export default function ProdutosCadastro() {
  const [form, setForm] = useState({ nome: '', lote: '', validade: '', categoria: '', quantidade: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const lista = JSON.parse(localStorage.getItem('produtos') || '[]');
    lista.push({ id: Date.now(), ...form });
    localStorage.setItem('produtos', JSON.stringify(lista));
    setForm({ nome: '', lote: '', validade: '', categoria: '', quantidade: '' });
  }

  return (
    <div className="page">
      <div className="content">
        <div className="form-card">
          <h2 className="page-title">Cadastro de Produto</h2>

          <form className="form" onSubmit={handleSubmit}>
            <div className="form-grid two-cols">
              <div>
                <label>Nome</label>
                <input name="nome" value={form.nome} onChange={handleChange} />
              </div>
              <div>
                <label>Lote</label>
                <input name="lote" value={form.lote} onChange={handleChange} />
              </div>
            </div>

            <div className="form-grid two-cols">
              <div>
                <label>Validade</label>
                <input name="validade" type="date" value={form.validade} onChange={handleChange} />
              </div>
              <div>
                <label>Categoria</label>
                <input name="categoria" value={form.categoria} onChange={handleChange} />
              </div>
            </div>

            <div className="form-grid">
              <div>
                <label>Quantidade</label>
                <input name="quantidade" type="number" value={form.quantidade} onChange={handleChange} />
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