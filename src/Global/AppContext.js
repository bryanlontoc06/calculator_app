import React, {useState} from 'react';
export const AppContext = React.createContext();


const AppProvider = (props) => {

  const [inputValue, setInputValue] = useState('');
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState(null);


  // Function after clicking a number
  const handleNumberClick = (number) => {
    if (inputValue === '0'){
      setInputValue(`${number}`);
    } else {
      setInputValue(`${inputValue}${number}`);
    }
  }

  // Operator Function
  const handleOperatorClick = (operator) => {
    setOperator(operator);
    setResult(inputValue);
    setInputValue('0');
  }

  // Equal Function
  const handleEqualsClick = () => {
    let newResult;
    setResult(inputValue);
    switch (operator) {
      case '+':
        newResult = Number(result) + Number(inputValue);
        break;
      case '-':
        newResult = Number(result) - Number(inputValue);
        break;
      case '*':
        newResult = Number(result) * Number(inputValue);
        break;
      case '/':
        newResult = Number(result) / Number(inputValue);
        break;
      default:
        return;
    }
    setResult(newResult);
    setInputValue(newResult.toString());
    setOperator(null);
  }

  // Delete every single character
  const handleDeleteClick = () => {
    console.log(typeof(inputValue))

    const newVal = inputValue.toString().slice(0, -1);
    setInputValue(newVal)
  }

  // Converts a number into postive and negative (vice versa)
  const handlePosNegClick = () => {
    let num;
    setOperator(operator);
    setResult(inputValue);
    num = inputValue * -1;
    setInputValue(num)
  }

  // Get the percentage of a number
  const handlePercentageClick = () => {
    let percentage = inputValue / 100;
    setInputValue(percentage);
  }

  // Clear the calculator result or number
  const handleClearClick = () => {
    setInputValue('0');
    setOperator(null);
    setResult(null);
  }

  // Initial states
  const initState = {
    inputValue,
    result
  }

  // All functions and setter
  const func = {
    setInputValue,
    handleNumberClick,
    handleOperatorClick,
    handleEqualsClick,
    handleClearClick,
    handleDeleteClick,
    handlePosNegClick,
    handlePercentageClick
  }

  return (
    <AppContext.Provider value={{ ...initState, ...func}}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppProvider;