//private this._data
//public this.data

class CalculatorController {
    constructor() {
        this._data = 0;
    };

    get getData() {
        return this._data;
    };
    
    set setData(value) {
    
       this._data = value;
       
    };
    
};
