import React from 'react';
import classes from './InputField.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun,faSearch } from '@fortawesome/free-solid-svg-icons';

export default function InputField({text,type}) {
    return (
        <div className={classes.inputField}>
        <input className={classes.input}type="text"placeholder={type}/>
        <FontAwesomeIcon icon={ faSearch } className={classes.icon2}/>
        <button className={classes.btn}>{text}</button>
        
      </div>
   
    )
}
