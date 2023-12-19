import React from 'react';
type ButtonPropsType = {
    title: string
    buttonFunc: () => void
    disabled?: boolean
}
export const Button = (props: ButtonPropsType) => {
   // const isDisabledInc = props.type === 'increment' ? props.count === 5 : false;
    //const isDisabledReset = props.type === 'reset' ? props.count === 0 : false;
    const callbackButtonHandler = () => {
        props.buttonFunc();
    }
    return (
        <button
            disabled={props.disabled}
            onClick={callbackButtonHandler}
        >
            {props.title}
        </button>
    )
}