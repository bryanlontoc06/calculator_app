import React, { useContext } from 'react';
import {AppContext} from '../Global/AppContext';

function Calculator({ result }) {
    const {
        handleClearClick,
        handleDeleteClick,
        handleEqualsClick,
        handleNumberClick,
        handleOperatorClick,
        handlePosNegClick,
        handlePercentageClick,
        inputValue,
    } = useContext(AppContext)


    // Calculator Details that is being mapped in every buttons.
    const calcuDetails = [
        {
            label: 'AC',
            function: handleClearClick,
            style: 'no-bg'
        },
        {
            label: 'Del',
            function: handleDeleteClick,
            style: 'no-bg'
        },
        {
            label: '+/-',
            function: handlePosNegClick,
            style: 'no-bg'
        },
        {
            label: '/',
            function: () => handleOperatorClick('/'),
            style: 'no-bg'
        },
        {
            label: '7',
            function: () => handleNumberClick('7')
        },
        {
            label: '8',
            function: () => handleNumberClick('8')
        },
        {
            label: '9',
            function: () => handleNumberClick('9')
        },
        {
            label: '*',
            function: () => handleOperatorClick('*'),
            style: 'no-bg'
        },
        {
            label: '4',
            function: () => handleNumberClick('4')
        },
        {
            label: '5',
            function: () => handleNumberClick('5')
        },
        {
            label: '6',
            function: () => handleNumberClick('6')
        },
        {
            label: '-',
            function: () => handleOperatorClick('-'),
            style: 'no-bg'
        },
        {
            label: '1',
            function: () => handleNumberClick('1')
        },
        {
            label: '2',
            function: () => handleNumberClick('2')
        },
        {
            label: '3',
            function: () => handleNumberClick('3')
        },
        {
            label: '+',
            function: () => handleOperatorClick('+'),
            style: 'no-bg'
        },
        {
            label: '%',
            function: handlePercentageClick
        },
        {
            label: '0',
            function: () => handleNumberClick('0')
        },
        {
            label: '.',
            function: () => handleNumberClick('.')
        },
        {
            label: '=',
            function: handleEqualsClick,
            style: 'royal-blue'
        }
    ]

  return (
    <div className="Calculator">
      <input type="text" className="Input" value={inputValue} readOnly />
      <div className="Buttons">
        {calcuDetails.map((detail, i) => {
            return (
                <button key={i} className={`Button ${detail.style}`} onClick={detail.function}>
                    {detail.label}
                </button>
            )
        })}
        </div>
        {/* <div className="Result">{result}</div> */}
    </div>
);
}

export default Calculator;