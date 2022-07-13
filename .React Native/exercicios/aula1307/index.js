// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Meu servidor node');
// });

// server.listen(8080, "localhost", () => {
//   console.log(`Rodando em http://localhost:8080`);
// });
//

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/cadastro/cliente', (req, res) => {
    res.send('voce esta na pagina de cadastro de cliente')
})

app.listen(8080, () => console.log('Executando em http://localhost:8080'))