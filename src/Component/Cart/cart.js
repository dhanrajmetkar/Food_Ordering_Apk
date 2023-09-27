import React from "react";
import classes from "./cart.module.css"
import Modal from "../UI/modal";
import { useContext } from "react"
import CartContext from "../../Store/cart-context";
import CartItem from "./cartitem";



const Cart = (props) => {

    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    const cartItemAddHandler = item => { };

    const cartItemRemoveHandler = id => { };


    const cartItem = <ul className={classes['cart-items']}>
        {
            cartCtx.items.map((item) =>
                <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)}></CartItem>)
        }
    </ul>

    return (
        <Modal onClick={props.onCloseCart}>
            <div>
                {cartItem}
            </div>
            <div className={classes.total}>
                <span  >Total Amount</span>
                <span> {totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button-alt"]} onClick={props.onCloseCart}>close</button>
                {hasItems && <button className={classes.button}>order</button>}
            </div>
        </Modal>
    )
}


export default Cart;