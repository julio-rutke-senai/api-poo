import { Livro } from "../entities/Livro.js"

export class LivroService{

    constructor(){

    }

    inserirLivro(body){
        let livro = new Livro()
        livro.setNome(body.nome)
        livro.setPagina(body.pagina)

        console.log(livro.exibirLivro())
    }

    alterarLivro(livro){

    }

    buscarLivro(){
        let livro = new Livro()

        livro.setNome("Redes de Computadores")
        livro.setAutor("Tannenbaum")
        livro.setPagina(270)

        return livro;
    }

}