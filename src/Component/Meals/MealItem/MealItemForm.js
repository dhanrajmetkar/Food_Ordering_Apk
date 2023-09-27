import classes from "./MealItemForm.module.css"
import React from "react"
import { useRef, useState } from "react"
import Input from "../../UI/Input"


const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }
    return (

        <form className={classes.form} onSubmit={submitHandler}>

            <Input
                useRef={amountInputRef}
                lable="Amount"
                input={{
                    id: "amount" + props.id,
                    type: "Number",
                    min: "1",
                    max: "5",
                    defaultValue: "1"

                }} />
            {/* one courly brace for js and other for object  */}
            <button>Add
            </button>
            {!amountIsValid && <p>Please enter the valid amount</p>}

        </form>


    )
}
export default MealItemForm