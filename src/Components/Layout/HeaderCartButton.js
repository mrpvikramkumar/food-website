import { useContext , useEffect ,useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/CartContext";
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props =>{
   const [btnIsHighLight ,setBtnIsHighLight] =useState(false);

    const cartContx =useContext(CartContext);

    const {items} = cartContx;

    const numberOfCartItems =items.reduce((curntNumber, item)=>{
        return curntNumber + item.amount;
    },0);

    const btnClasses = `${classes.button} ${btnIsHighLight ? classes.bump : ''}`;

    useEffect(()=>{
        if(items.length ===0){
            return;
        }
        setBtnIsHighLight(true);

        const timer=setTimeout(()=>{
            setBtnIsHighLight (false);
        },300);
        return () =>{
            clearTimeout(timer);
        }
    },[items])

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.CartIcon}>
        </span>
        <CartIcon/>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
};


export default  HeaderCartButton;