export class Autor{

    constructor(){
        let _nome
        let _idade

        this.setNome = (nome) => _nome = nome
        this.getNome = () => _nome

        this.setIdade = (idade) => _idade = idade
        this.getIdade = () => _idade
    }

    cadastrarAutor(obj){
        autor = new Autor()
        autor.setNome(obj.nome)
        autor.setIdade(obj.idade)
    }

}