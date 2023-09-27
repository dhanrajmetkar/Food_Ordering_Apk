import React from "react";
import classes from "./cart.module.css"
import Modal from "../UI/modal";


const Cart = (props) => {

    const cartItem = <ul className={classes['cart-items']}>
        {
            [{ id: "c1", key: "c1", name: "sushi", amout: "2", price: "23" }].map((item) =>
                <li>{item.name}</li>)
        }
    </ul>

    return (
        <Modal onClick={props.onCloseCart}>
            <div>
                {cartItem}
            </div>
            <div className={classes.total}>
                <span  >Total Amount</span>
                <span> 242.2</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button-alt"]} onClick={props.onCloseCart}>close</button>
                <button className={classes.button}>order</button>
            </div>
        </Modal>
    )
}


export default Cart;