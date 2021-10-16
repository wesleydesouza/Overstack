class Controller {
    constructor(){
        this.initialize();
    };

    addEventListenerAll(element, events, func){
       events.split(' ').forEach(event => {
        element.addEventListener(event, func);
        //                       element,    event,     func
        //this.addEventListenerAll(btn, "click mouse", () => {}
       });
       
    }

    initialize(){
        let button = document.querySelectorAll(".button > button, .button2 > button");

        button.forEach(btn =>{
            this.addEventListenerAll(btn, "click mouseover", () => {
               console.log("interagiu");
            });
        });
    };
};