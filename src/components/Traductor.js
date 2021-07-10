import React, { useState } from 'react';
import { Header } from './Header';

const Traductor = () => {
    const [ text, setTetx ] = useState();

    const handleTraducer = ({target}) => {
        let newText = target.value.replace(/a/gi,'i').replace(/e/gi,'i').replace(/o/gi,'i').replace(/u/gi,'i'); 
        newText = newText.replace(/á/gi,'i').replace(/é/gi,'i').replace(/í/gi,'i').replace(/ó/gi,'i').replace(/ú/gi,'i'); 
        newText = newText.replace(/ä/gi,'i').replace(/ë/gi,'i').replace(/ï/gi,'i').replace(/ö/gi,'i').replace(/ü/gi,'i'); 
        setTetx( newText );
    }

    const handleClear = () => {
        document.getElementById("textInput").value = "";
        setTetx();
    }

    return (
        <div className = 'cardContent' >
            <Header />       
            <input className = 'textInput' onChange = { handleTraducer } placeholder = 'type something...' id = 'textInput' />
            <p>{ text }</p>
            <button className = 'controls' onClick = { handleClear }>Clear</button>
        </div>
    )
}

export default Traductor
