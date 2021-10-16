class Controller {
    constructor() {
        this._textElement = document.querySelector("#text");
        this.initialize();
    };

    initialize(){
        
        this._textElement.innerHTML = "Titulo da pagina";
    };

    //get e set manipula o elemento do constructor

    //Quando formos acessar, “pegar” alguns atributos da classe, devemos utilizar os métodos GET. Esse método sempre retornará um valor, seja ele String, int ,double etc. Então devemos criar uma função.
    get textElement() {
        return this._textElement;
    };


    //Esse método não terá um retorno, pois o atributo será somente modificado, criando um método de tipo VOID, sem retorno. Porém ele deve receber algum argumento para que possa ocorrer a devida alteração. 
    set textElement(value) {
        this._textElement.innerHTML = value;
    }
};
