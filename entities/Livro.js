export class Livro{

    _nome
    _autor
    _pagina
    
    constructor(){
        this._nome = ""
        this._autor = ""
        this._pagina = ""
    }

    getNome(){
        return this._nome
    }

    setNome(nome){
        this._nome = nome
    }

    getPagina(){
        return this._pagina
    }

    setPagina(pagina){
        this._pagina = pagina
    }

    getAutor(){
        return this._autor
    }

    setAutor(autor){
        this._autor = autor
    }

    exibirLivro() {
        console.log("Livro "+this.getNome()+" - Autor "+this.getAutor()+" "+this.getPagina()+" páginas")
    }

}