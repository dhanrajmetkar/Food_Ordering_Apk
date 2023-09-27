import React from "react"
import { useReducer } from "react";
import CartContext from "./cart-context";


const defaultcartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updateditems = state.items.concat(action.item);
        const updatedTotalAmout = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updateditems,
            totalAmount: updatedTotalAmout
        }

    }
    return defaultcartState;

}


const ContexProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultcartState);


    const handleAddContext = item => {
        dispatchCartAction({
            type: 'ADD',
            item: item,
        })
    };

    const handleRemoveContext = (id) => {
        dispatchCartAction({
            type: 'REMOVE',
            id: id

        })
    }
    const cartContext = [{
        items: cartState.item,
        totalAmount: cartState.totalAmount,
        addItem: handleAddContext,
        removeItem: handleRemoveContext
    }]
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>

    )
}
export default ContexProvider;