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

    action(value){
        switch(value) {
            case "Enter":
                this.submit();
                break;
            
            case "Escape":
                this.clearAll();
                break;

            default: 
                break;
        };
    };

    initialize(){
        document.addEventListener("keyup", (e) =>{
           this.action(e.key);
        })
    };
};