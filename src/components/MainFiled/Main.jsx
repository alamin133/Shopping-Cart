import React from 'react';
import classes from './Main.module.css';
import img from '../../images/profile.png';
import Details from './Details/Details';
import Address from './address/Address';

export default function Main() {
    return (
        <div className={classes.main}>
            <div className={classes.header}>
                <div className={classes.item}>
                <img className={classes.img}src={img}alt=""/>
                <div className={classes.para}>
                    <h1 className={classes.name}>The Octocat</h1>
                    <h4 className={classes.tag}>octocat</h4>
                    <h3 className={classes.bio}>This profile has no bio</h3>
                </div>
                <h3 className={classes.date}>Joined 26 January 2020</h3>

                </div>
                <div className={classes.detail}>
                   <div className={classes.flex}>
                   <Details title="Repos"number="8"/>
                    <Details title="Followers"number="3978"/>
                    <Details title="following"number="100"/>

                   </div>
                   

                </div>
                <Address/>
                
               


               
            </div>
            
            
        </div>
    )
}
