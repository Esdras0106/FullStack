import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { criarProduto } from '../services/api';

const schema = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório'),
  lote: yup.string().required('Lote é obrigatório'),
  validade: yup.string().required('Validade é obrigatória'),
  categoria: yup.string().required('Categoria é obrigatória'),
  quantidade: yup.number().typeError('Quantidade deve ser número').integer('Deve ser inteiro').positive('Maior que zero').required('Quantidade é obrigatória')
});

function ProdutoForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      await criarProduto(data);
      navigate('/produtos');
    } catch (err) {
      console.error('Erro ao criar produto', err);
      alert('Erro ao criar produto');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 600 }}>
      <div>
        <label>Nome</label>
        <input {...register('nome')} />
        <p style={{ color: 'red' }}>{errors.nome?.message}</p>
      </div>
      <div>
        <label>Lote</label>
        <input {...register('lote')} />
        <p style={{ color: 'red' }}>{errors.lote?.message}</p>
      </div>
      <div>
        <label>Validade</label>
        <input {...register('validade')} />
        <p style={{ color: 'red' }}>{errors.validade?.message}</p>
      </div>
      <div>
        <label>Categoria</label>
        <input {...register('categoria')} />
        <p style={{ color: 'red' }}>{errors.categoria?.message}</p>
      </div>
      <div>
        <label>Quantidade</label>
        <input type="number" {...register('quantidade')} />
        <p style={{ color: 'red' }}>{errors.quantidade?.message}</p>
      </div>
      <button type="submit" disabled={isSubmitting}>Salvar Produto</button>
    </form>
  );
}

export default ProdutoForm;
