class Controller {
    constructor() {
        this._timeElement = document.querySelector("#date");
        this.initialize();
    };

    initialize(){
        setInterval(() =>{

            this._timeElement.innerHTML = this.currentDate.toLocaleTimeString("pt-BR");
        }, 1000);
    };
    
   
   get currentDate(){
    return new Date();
   };
};