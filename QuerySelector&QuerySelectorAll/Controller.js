class Controller {
    constructor() {
        this.initializeButtons();
    };

    initializeButtons(){
        document.querySelector(".button > .btn, .button2 > button");//pega o primeiro elemento
        document.querySelectorAll(".button > .btn, .button2 > button");//pega tds os elementos, retornando uma array
    };
};