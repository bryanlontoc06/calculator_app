import React, { useEffect, useCallback, useContext } from 'react';
import Calculator from './Calculator';
import {AppContext} from '../Global/AppContext';

function App() {

  const { result,
    handleClearClick,
    handleDeleteClick,
    handleEqualsClick,
    handleNumberClick,
    handleOperatorClick,
    } = useContext(AppContext)

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  // Callback function after clicking an event
  const handleKeyDown = useCallback((event) => {
    const { key } = event;
    if (/\d/.test(key)) {
      handleNumberClick(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
      handleOperatorClick(key);
    } else if (key === 'Enter' || key === '=') {
      handleEqualsClick();
    } else if (key === 'Escape' || key === 'AC') {
      handleClearClick();
    } else if (key === 'Backspace' || key === 'Delete') {
        handleDeleteClick();
    }
  });


  return (
    <div >
        <Calculator result={result} />
    </div>
  );
}

export default App;