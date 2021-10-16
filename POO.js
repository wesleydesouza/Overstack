let Celular = function(){
    this.cor = "preto";

    this.ligar = () => {
        console.log("ligando...");
        return "ok";
    };
};

let objeto = new Celular();

console.log(objeto.ligar());