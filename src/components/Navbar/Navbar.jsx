import React from 'react';
import classes from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun} from '@fortawesome/free-solid-svg-icons';

export default function Navbar({title,text}) {
    return (
        <nav className={classes.nav}>
        <h1 className={classes.title}>{title}</h1>
        <div className={classes.sunGroup}>
          <h1 className={classes.title}>{text}</h1>
          <FontAwesomeIcon icon={ faSun } className={classes.icon}/>
 
        </div>
       
      </nav>
    )
}
