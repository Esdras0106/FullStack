// ...existing code...
const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('db_Att_Mal', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const Cliente = sequelize.define('Cliente', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    formaDepagamento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Produto = sequelize.define('Produto', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lote: {
        type: DataTypes.STRING,
        allowNull: false
    },
    validade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

app.get('/', (req, res) => {
    res.send('🚀API está funcionando🚀');
});

app.get('/Clientes', async (req, res) => {
    const Clientes = await Cliente.findAll();
    res.json(Clientes);
});

app.post('/Clientes', async (req, res) => {
    try {
        const {
            nome,
            email,
            telefone,
            formaDepagamento,
            endereco
        } = req.body;
        const novoCliente = await Cliente.create({
            nome,
            email,
            telefone,
            formaDepagamento,
            endereco
        });
        res.status(201).json(novoCliente);
    } catch (err) {
        if (err.name === 'SequelizeUniqueConstraintError') {
            return res.status(409).json({ message: 'Cliente já cadastrado.' });
        }
        console.error('Erro ao criar cliente:', err);
        return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
});

app.get('/Produtos', async (req, res) => {
    const Produtos = await Produto.findAll();
    res.json(Produtos);
});

app.post('/Produtos', async (req, res) => {
    try {
        const {
            nome,
            lote,
            validade,
            categoria,
            quantidade
        } = req.body;
        const novoProduto = await Produto.create({
            nome,
            lote,
            validade,
            categoria,
            quantidade
        });
        res.status(201).json(novoProduto);
    } catch (err) {
        console.error('Erro ao criar produto:', err);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
});

// Sincroniza modelos e inicia o servidor
sequelize.sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`🚀API rodando em http://localhost:${port}`);
            console.log('🚀Conectado ao banco de dados MySQL.');
        });
    })
    .catch((error) => {
        console.log('Não foi possível conectar ao banco de dados:', error);
    });