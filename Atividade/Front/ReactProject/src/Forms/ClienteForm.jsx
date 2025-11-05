import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { criarCliente } from '../services/api';

const schema = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  telefone: yup.string().required('Telefone é obrigatório'),
  formaDepagamento: yup.string().required('Forma de pagamento é obrigatória'),
  endereco: yup.string().required('Endereço é obrigatório')
});

function ClienteForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      await criarCliente(data);
      navigate('/clientes');
    } catch (err) {
      console.error('Erro ao criar cliente', err);
      alert('Erro ao criar cliente');
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
        <label>Email</label>
        <input {...register('email')} />
        <p style={{ color: 'red' }}>{errors.email?.message}</p>
      </div>
      <div>
        <label>Telefone</label>
        <input {...register('telefone')} />
        <p style={{ color: 'red' }}>{errors.telefone?.message}</p>
      </div>
      <div>
        <label>Forma de pagamento</label>
        <input {...register('formaDepagamento')} />
        <p style={{ color: 'red' }}>{errors.formaDepagamento?.message}</p>
      </div>
      <div>
        <label>Endereço</label>
        <input {...register('endereco')} />
        <p style={{ color: 'red' }}>{errors.endereco?.message}</p>
      </div>
      <button type="submit" disabled={isSubmitting}>Salvar Cliente</button>
    </form>
  );
}

export default ClienteForm;
