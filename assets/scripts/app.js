let defaultResult=0;
let currentResult=defaultResult;
let logEnteries=[];

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator,resultBeforeCalc,calcNumber){
    const calcDescription=`${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult,calcDescription);
}
 
function writeToLog(operationIdentifier,
    prevNumber,
    operationNumber,
    newResult){
        const logEntry= {
            operation:operationIdentifier,
            previorsNumber:prevNumber,
            number:operationNumber,
            result: newResult
    
        };
        logEnteries.push(logEntry);
        console.log(logEnteries);
    
}
function calculateResult(calculateType){
    const enteredNumber=getUserNumberInput();
    if(
        calculateType!=='ADD' &&
        calculateType!=='SUBTRACT' &&
        calculateType!=='MULTIPLY' &&
        calculateType!=='DIVIDE' ||
        !enteredNumber
    ){
        return
    }
    
    const initialResult=currentResult;
    let mathOperator
    if(calculateType==='ADD'){
        currentResult+=enteredNumber;
        mathOperator='+'

    }
    else if(calculateType==='SUBTRACT'){
        currentResult-=enteredNumber;
        mathOperator='-';
    }
    else if(calculateType==='MULTIPLY'){
        currentResult*=enteredNumber;
        mathOperator='*'
    }
    else if(calculateType==='DIVIDE'){
        currentResult/=enteredNumber;
        mathOperator='/'
    }
    
    createAndWriteOutput(mathOperator,initialResult,enteredNumber); 
    writeToLog('ADD',initialResult,enteredNumber,currentResult);
}

function add(){
    calculateResult('ADD')
    
}

function  subtract(){
    calculateResult('SUBTRACT')
}
function multiplication(){
    calculateResult('MULTIPLY')
}

function division(){
    calculateResult('DIVIDE')
}
addBtn.addEventListener('click',add)
subtractBtn.addEventListener('click',subtract)
multiplyBtn.addEventListener('click',multiplication)
divideBtn.addEventListener('click',division)
