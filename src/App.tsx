import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';
import {Button} from './components/Button';



function App() {
    const [count, setCount] = useState(0)


    function increment() {
        if (count < 5) {
            setCount(count + 1);
        }
    }

    function resetCounter() {
        setCount(0);
    }

    function isDisabledReset() {
        return count === 0;
    }

    function isDisabledInc() {
        return count === 5;
    }

    return (
        <>
            <h1 className='title'>Magic Counter</h1>
            <div className='counter'>
                <div className='display'>{count}</div>
                <div className='buttons'>
                    <button style={{opacity : isDisabledInc() ? 0.5 : 1}} disabled={isDisabledInc()} onClick={increment}>inc</button>
                    <button style={{opacity : isDisabledReset() ? 0.5 : 1}} disabled={isDisabledReset()} onClick={resetCounter}>reset</button>
                </div>
            </div>
        </>
        // <>
        //     <Counter count={count}/>
        //     <div className="buttons">
        //         <Button type={'increment'} buttonFunc={increment} count={count}/>
        //         <Button type={'reset'} buttonFunc={resetCounter} count={count}/>
        //     </div>
        // </>

    );
}


export default App;
