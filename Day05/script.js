/*Calculator class*/
class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear(); /*Clears the output field upon creating new calculator*/
    }

    /*Defining Functions*/

    /*Clear function to clear all display*/
    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    /*Delete functionn to delete the last entered input*/
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    /*Append function to add numbers into the display for computation*/
    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();

    }

    chooseOperation(operation){
        if(this.currentOperand === '') return;
        if(this.previousOperand !== ''){
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute(){
        let computation;
        const prev = parseFloat(this.previousOperand);
        const curr = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(curr)) return /*Not A Number*/
        switch(this.operation){
            case '+':
                computation = prev + curr;
                break;
            case '-':
                computation = prev - curr;
                break;
            case '*':
                computation = prev * curr;
                break;
            case '/':
                computation = prev / curr;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    /*Helper function to display with comma delimiters*/
    getDisplayNumber(number){
        /*Decimal display*/
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]); /*for digits before decimal*/
        const decimalDigits = stringNumber.split('.')[1]; /*for digits after decimal*/
        /*Integer display*/
        let integerDisplay;
        if(isNaN(integerDigits)){
            integerDisplay = '';
        } else{
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits:0});
            /*Ensuring no decimal exists in integers*/
        }
        /*Decimal digits present*/
        if (decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`;
        }else{
            return integerDisplay;
        }
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if (this.operation != null){
            /*implement printing values and operation signs together for previous operand (small numbers)*/
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`; 
        }else{
            this.previousOperandTextElement.innerText = ''
        }
        
    }
}


/*Driver Section*/
/*Variable declaration*/
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

/*Creating new calculator object*/
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

/*Loop over number buttons*/
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

/*Loop over operation buttons*/
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

/*Equals button event listener to compute and update display*/
equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

/*All Clear button event listener to clear and update display*/
allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

/*Delete button event listener to delete and update display*/
deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})

