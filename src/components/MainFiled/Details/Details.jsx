import React from 'react';
import classes from './Details.module.css'

export default function Details({title,number}) {
    return (
        <div className={classes.details}>
        <div>
            <h3 className={classes.title}>{title}</h3>
            <h3 className={classes.name}>{number}</h3>
        </div>
       

    </div>

    )
}
