class Celular {
    constructor(){
        this.cor = "preto";
        this.ligar();
    };

    ligar() {
        console.log("ligando!");
        return "OK";
    };
};

let objeto = new Celular();

console.log(objeto.ligar());