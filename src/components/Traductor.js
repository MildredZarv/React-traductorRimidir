import React, { useState } from 'react';

const Traductor = () => {
    const [ text, setTetx ] = useState();

    const handleTraducer = ({target}) => {
        const newText = target.value.replace(/a/gi,'i').replace(/e/gi,'i').replace(/o/gi,'i').replace(/u/gi,'i'); 
        setTetx( newText );
    }

    const handleClear = () => {
        document.getElementById("textInput").value = "";
        setTetx();
    }

    return (
        <div>        
            <input className = 'textInput' onChange = { handleTraducer } placeholder = 'type something...' id = 'textInput' />
            <p>{ text }</p>
            <button className = 'controls' onClick = { handleClear }>Clear</button>
        </div>
    )
}

export default Traductor
