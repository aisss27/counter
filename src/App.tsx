import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';
import {Button} from './components/Button';
const maxValue = 5


function App() {
    const [value, setValue] = useState(()=>{
        let valueAsString = localStorage.getItem('counterValue')
        if(valueAsString){
            return JSON.parse(valueAsString)
        }
        return 0.5
    })



    function increment() {
        if (value < 5) {
            localStorage.setItem('counterValue',JSON.stringify(value
            +1))
            setValue(value + 1);
        }
    }

    function resetCounter() {
        localStorage.setItem('counterValue',JSON.stringify(0))
        setValue(0);
    }

    const isDisabledReset= value === 0;


    function isDisabledInc() {
        return value >= maxValue;
    }


    return (
        // <>
        //     <h1 className='title'>Magic Counter</h1>
        //     <div className='counter'>
        //         <div className='display'>{value}</div>
        //         <div className='buttons'>
        //             <button style={{opacity : isDisabledInc() ? 0.5 : 1}} disabled={isDisabledInc()} onClick={increment}>inc</button>
        //             <button style={{opacity : isDisabledReset ? 0.5 : 1}} disabled={isDisabledReset} onClick={resetCounter}>reset</button>
        //         </div>
        //     </div>
        // </>
        <>
            <Counter count={value}/>
            <div className="buttons">
                <Button title={'increment'} buttonFunc={increment} disabled={value>=maxValue}/>
                <Button title={'reset'} buttonFunc={resetCounter} disabled={false}/>
            </div>
        </>

    );
}


export default App;
