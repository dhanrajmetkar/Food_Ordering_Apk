import React from "react";
import meals from "../../assets/meals.jpg"
import classes from './Header.module.css';
import HeaderButton from "./HeaderButton";

const Header = props => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Real meal</h1>
                <HeaderButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>

                <img src={meals} alt="meal" />
            </div>
        </React.Fragment>
    )
}
export default Header;