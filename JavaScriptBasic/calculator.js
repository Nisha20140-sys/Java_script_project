class Calculator{
    constructor(){
        this.numArr = []
        this.currentNum = ""
        this.result = ""
        this.prevResult = ""
        this.operation = []
    }
    add(numOne,numTwo){
        return Number(numOne) + Number(numTwo)
    }
    subtract(numOne,numTwo){
        return Number(numOne) -  Number(numTwo)
    }
    multiply(numOne,numTwo){
        return Number(numOne) *  Number(numTwo)
    }
    divide(numOne,numTwo){
        return Number(numOne) /  Number(numTwo)
    }
    setCurrentNum(value){
        this.currentNum += value
    }
    clearCurrentNum(){
        this.numArr.push(this.currentNum) 
        this.currentNum = 0
    }
    setOperation(operation){
        this.operation.push(operation)
        this.numArr.push(this.currentNum)
        this.currentNum = ""
    }
    clearCalculator(){
        this.numArr = []
        this.currentNum = ""
        this.result = ""
        this.prevResult = ""
        this.operation = []
    }
    changeSign(forNumOne){
        if(forNumOne){
            this.numOne = String(Number(this.numOne) * -1)
            return
        }
        this.numTwo =  String(Number(this.numTwo) * -1)
    }
    undo(forNumOne){
        if(forNumOne){
            this.numOne =  this.numOne.substring(0,(this.numOne.length-1))
            return;
        }
        this.numTwo =  this.numTwo.substring(0,(this.numTwo.length-1))
    }
}

const SignObject = {
    ADD:"+",
    SUBTRACT:"-",
    MULTIPLY:"x",
    DIVIDE:"÷"
}



const calculator = new Calculator()



const updateMainDisplay = () =>{
    const main = document.getElementById("main-display");
    // main.value =  calculator.currentNum || 0;
    // const secondary = document.getElementById("main-display").value
    const newNumArr = [...calculator.numArr];
    const newOperation = [...calculator.operation];
    let text = "";
    while(newNumArr.length !== 0){
        const num = newNumArr.shift();
        const operation = newOperation.shift();
        text += `${num} ${SignObject[operation] ? SignObject[operation] : ""}`;
    }
    main.value = text+`${calculator.currentNum }`;
    console.log(main.value);
} 
const numKeyClickHandler = (num) =>{
    calculator.setCurrentNum(num)
    updateMainDisplay()
}

const operandKeyClickHandler = (operation) =>{
    calculator.setOperation(operation)
    updateMainDisplay()
}

const resultClickHandler = () =>{
    calculator.clearCurrentNum()
    const newNumArr = [...calculator.numArr];
    const newOperation = [...calculator.operation];
    // TODO: Move logic to class as result method
    while(newNumArr.length !== 1){
        const numOne = newNumArr.shift()
        const numTwo = newNumArr.shift()
        const operation = newOperation.shift()

        switch (operation) {
            case "ADD":
                newNumArr.unshift(calculator.add(numOne,numTwo))
                break;
            case "SUBTRACT":
                newNumArr.unshift(calculator.subtract(numOne,numTwo))
                break;
            case "MULTIPLY":
                newNumArr.unshift(calculator.multiply(numOne,numTwo))
                break;
            case "DIVIDE":
                newNumArr.unshift(calculator.divide(numOne,numTwo))
                break;
            default:
                break;
        }
    }
    calculator.currentNum=newNumArr[0]
    const main = document.getElementById("main-display")
    main.value = newNumArr[0]
    calculator.numArr=[]
    calculator.operation=[]
}

const actionKeyClickHandler = (action) => {
    switch (action) {
        case "CLEAR_ALL":
            calculator.clearCalculator()
            break;
        case "CHANGE_SIGN":
            calculator.changeSign(calculator.operation ? false : true)
            break;
        default:
            break;
    }
    updateMainDisplay()
}

const undoClickHandler = () =>{
    calculator.undo(calculator.operation ? false : true)
    updateMainDisplay()
}