import express from 'express'
import config from 'config'
import { LivroController } from './controllers/LivroController.js'
import bodyParser from 'body-parser'

const app = express()

const port = process.env.PORT || config.get('server.port')

app.use(bodyParser.json())

const livroController = new LivroController(app)

app.listen(port, () => {
    console.log("Aplicação executando")
})