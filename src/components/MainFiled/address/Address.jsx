import React from 'react';
import classes from './Address.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap,faHome,faAddressBook,faAd, faAddressCard} from '@fortawesome/free-solid-svg-icons';

export default function Address() {
    return (
        <div className={classes.address}>
           <div className={classes.flex}>
           <div className={classes.town}>
                <div className={classes.social}>
                <FontAwesomeIcon icon={ faMap} className={classes.icon3}/>
                <h3 className={classes.text}>San Fransisco</h3>

                </div>
                <div className={classes.social}>
                <FontAwesomeIcon icon={ faHome} className={classes.icon3}/>
                <h3 className={classes.text}>America</h3>

                </div>
            </div>
            <div className={classes.media}>
               
            <div className={classes.social}>
                <FontAwesomeIcon icon={ faAddressCard} className={classes.icon3}/>
                <h3 className={classes.text}>Not available</h3>

                </div>
                <div className={classes.social}>
                <FontAwesomeIcon icon={ faAd} className={classes.icon3}/>
                <h3 className={classes.text}>Linkedin</h3>

                </div>
            </div>

           </div>
            
        </div>
    )
}
