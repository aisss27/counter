import React, {useState} from 'react';

type CounterPropsType = {
   count: number
}
const Counter = (props: CounterPropsType) => {

    return (
        <div>
            <h1 className='title'>Magic Counter</h1>
            <div className='counter'>
                <div className='display'>{props.count}</div>
            </div>
        </div>
    );
};

type ButtonPropsType = {
    type: 'increment' | 'reset'
    buttonFunc: () => void
    count: number
}
export const Button = (props: ButtonPropsType) => {
    const isDisabledInc = props.type === 'increment' ? props.count === 5 : false;
    const isDisabledReset = props.type === 'reset' ? props.count === 0 : false;

    return (
        <button
            style={{ opacity: isDisabledInc || isDisabledReset ? 0.5 : 1 }}
            disabled={isDisabledInc || isDisabledReset}
            onClick={props.buttonFunc}
        >
            {props.type === 'increment' ? 'inc' : 'reset'}
        </button>
    )
}

export default Counter;