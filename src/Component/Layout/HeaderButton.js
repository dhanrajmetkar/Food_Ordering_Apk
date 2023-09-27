
// const HeaderButton = (props) => {

//     const cartCtx = useContext(CartContext);

//     const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
//         return curNumber + item.amount;
//     }, 0);
//     return (
//         <React.Fragment>

//             <button className={classes.button} onClick={props.onClick}>

//                 <span className={classes.icon}>
//                     <ShoppingCartIcon />
//                 </span>
//                 <span>
//                     Your Cart
//                 </span>
//                 <span className={classes.badge}>
//                     {numberOfCartItems}
//                 </span>
//             </button>


//         </React.Fragment>

//     )
// }
// export default HeaderButton;





import { useContext } from 'react';

import CartContext from '../../Store/cart-context';
import classes from './HeaderCard.module.css'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const HeaderButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);
    // console.log(cartCtx.items);
    // const numberOfCartItems = 0;

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <ShoppingCartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderButton;