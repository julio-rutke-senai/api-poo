import { Autor } from "./entities/Autor.js"
import { Livro } from "./entities/Livro.js"

let livro = new Livro()
let autor = new Autor()

autor.setNome("Tanenbaum")
autor.setIdade(150)

livro.setNome("Redes de Computadores")
livro.setAutor(autor)
livro.setPagina(270)

livro.getNome()

livro.exibirLivro()


