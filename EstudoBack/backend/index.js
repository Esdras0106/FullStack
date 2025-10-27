const express = require('express');
const cors = require('cors');
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('db_EstudoBack', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

const Usuario = sequelize.define('Usuario', {
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
        allowNull: false,
        unique: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.get ('/', (req, res) => {
    res.send('API rodando com Express e Sequelize');
});

app.get('/Usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(400).json({ error: 'Não foi possível listar os usuários' });
    }
});

app.post('/Usuarios', async (req, res) => {
 
    try {
        const { nome, email, telefone } = req.body;
        const novoUsuario = await Usuario.create({ nome, email, telefone });
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(400).json({ error: 'Não foi possível criar o usuário' });
    }
});

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log(`Servidor rodando na porta ${port}` );
    }); 
}).catch((error) => {
    console.error('Não foi possível conectar ao banco de dados:', error);
});