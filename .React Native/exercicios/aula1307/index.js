// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Meu servidor node');
// });

// server.listen(8080, "localhost", () => {
//   console.log(`Rodando em http://localhost:8080`);
// });


const express = require('express')
const app = express()

cientes = [
    {
        id: 1,
        nome: "Jose",
        email: "jose@gmail.com"
    },
    {
        id: 2,
        nome: "Maria",
        email: "maria@gmail.com"
    },
    {
        id: 3,
        nome: "Joao",
        email: "joao@gmail.com"
    }
]

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/cadastro/cliente', (req, res) => {
    res.send('voce esta na pagina de cadastro de cliente')
})

app.get('/consultar', (req, res) => {
    res.send(clientes)
})

app.listen(8080, () => console.log('Executando em http://localhost:8080'))