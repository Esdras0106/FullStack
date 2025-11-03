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
        allowNull: false,

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

const Produto = sequelize.define('Usuario', {
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
        allowNull: false,

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

app.get('/', (req, res) => (
    res.send('🚀API está funcionando🚀')
))

app.get( '/Cliente', async(req, res) =>{
    const Cliente = await Cliente.findAll();
    res.json(Clientes)
});

app.get( '/Produto', async(req, res) =>{
    const Cliente = await Produto.findAll();
    res.json(Produtos)
});

app.post('/Clientes', async(req,res)=>{
    try{
        const{id,
            nome,
            email,
            telefone,
            formaDepagamento,
            endereco
        } = req.body;
        const novoCliente = await Cliente.create({nome,
            email,
            telefone,
            formaDepagamento,
            endereco
        })
    } catch(err){

        if (err.name === 'SequelizeUniqueConstrainterror'){
            return res.status(409).json({message: 'Cliente já cadastrado.'})
        }
        
        console.err('Erro ao criar cliente:', err);
        return res.status(500).json({ message: 'E-mail interno do servidor.'})
    }
});

sequelize.sync().then(()=>{
    app.listen(port, ()=>{
        console.log(`🚀API rodando em http:localhost:${port}`)
        console.log('🚀Conectado ao banco de dados MySQL.')
    });
}).catch(err => {
    console.log('Não foi possível conectar ao banco de dados:', err)
})





