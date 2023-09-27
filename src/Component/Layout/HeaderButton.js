import React, { useContext } from "react";
import classes from "./HeaderCard.module.css"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CartContext from "../../Store/cart-context";

const HeaderButton = (props) => {

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return (
        <React.Fragment>

            <button className={classes.button} onClick={props.onClick}>

                <span className={classes.icon}>
                    <ShoppingCartIcon />
                    {/* <CartIcon></CartIcon> */}
                </span>
                <span>
                    Your Cart
                </span>
                <span className={classes.badge}>
                    {numberOfCartItems}
                </span>
            </button>


        </React.Fragment>

    )
}
export default HeaderButton;