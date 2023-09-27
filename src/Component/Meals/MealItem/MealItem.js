import React from "react";
import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm";

import { useContext } from "react";
import CartContext from "../../../Store/cart-context";


const MealItem = (props) => {
    const cartCtx = useContext(CartContext);

    const addTocartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name, amount,
            price: props.price

        });
    }

    return (
        //const price=`$${props.price.toFixed(2)}`;
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>
                    {props.description}
                </div>
                <div className={classes.price}> {props.price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddTocart={addTocartHandler}></MealItemForm>
            </div>
        </li>
    )
}
export default MealItem;