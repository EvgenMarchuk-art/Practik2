import React from 'react';
import './Input.css'


function Input(props) {

    let inputValue=(event)=>{
        props.inputOnChange(event)
    };


    return (
        <input className="input" type="Number" onChange={inputValue}/>
    );
}

export default Input;