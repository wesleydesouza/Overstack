class EventController{
    constructor(){
        this.initialize();
    };

    async submit(){
        const json = await fetch("http://overstack.com.br");
    };

    clearAll(){
        console.log("limpando");
    };

    copy(){
        const input = document.createElement("input");
        input.value = "texto aleatorio";

        document.body.appendChild(input);

        input.select();

        document.execCommand("Copy");
    };

    action(e){

        switch(e.key) {
            case "Enter":
                this.submit();
                break;
            
            case "Escape":
                this.clearAll();
                break;

                case "c":
                    if(e.ctrlKey) 
                        this.copy();
                    break;
    
            default: 
                break;
        };
    };

    addEventListenerAll(element, events, func){
        console.log(element);
        events.split(" ").forEach( event => {
            element.addEventListener(event, func)
        });
    };

    initialize(){
        this.addEventListenerAll(document ,"keyup paste", (e) =>{
           this.action(e);
        })
    };
};