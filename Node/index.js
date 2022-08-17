const express = require('express');
const { release } = require('os');
const app = express()
const cors = require('cors')

app.use(cors())

var pg = require('pg');
var conString = "postgres://postgres:1234@localhost/estacionamento";
const pool = new pg.Pool({ connectionString: conString })

app.get('/conectar', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            return res.status(401).send({
                messagem: "Erro de conexão",
                erro: err.message
            })
        }
        return res.status(200).send({
            message: "Conectado com sucesso"
        })
    })

})

app.get('/clientes', (req, res) => {
    pool.connect((err, client, release) => {
        if (err) {
            release()
            return res.status(401).send({
                message: "erro de conexão",
                erro: err.message
            })
        }
        client.query('select * from cliente', (error, result) => {
            release()
            if (error) {
                return res.status(500).send({
                    message: "Ocorreu erro na consulta",
                    erro: error.message
                })
            }
            return res.status(200).send(result.rows)
        })
    })
})


app.get('/clientes/:idcliente', (req, res) => {
    pool.connect((err, client, release) => {
        if (err) {
            release()
            return res.status(401).send({
                message: "erro de conexão",
                erro: err.message
            })
        }
        client.query('select * from cliente where id=$1::int', [req.params.idcliente], (error, result) => {
            release()
            if (error) {
                return res.status(500).send({
                    message: "Ocorreu erro na consulta",
                    erro: error.message
                })
            }
            if (result.rows.length == 1) {
                return res.status(200).send(result.rows[0])
            } else {
                return res.status(404).send({
                    status: 404,
                    message: "Id não encontrado"
                })
                
            }

        })
    })
})


app.listen(8080, () => console.log('Executando em http://localhost:8080'))
