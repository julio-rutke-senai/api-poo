
import { LivroService } from "../services/LivroService.js"

export class LivroController{

    livroService

    constructor(app){

        this.livroService = new LivroService()

        app.get('/health', (req, res) => {
            console.log("Tá Rodando!")
            res.send("Tá Rodando!")
        })

        app.get('/buscar', (req, res) => {
            let livro = this.livroService.buscarLivro()

            res.send(livro)

        })

        app.post('/add', (req, res) => {

            this.livroService.inserirLivro(req.body)

            res.status(201).send("Criado com Sucesso!")
        })

    }
}