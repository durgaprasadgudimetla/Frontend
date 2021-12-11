import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import CartContext from "../store/cart-context";
import { useContext  ,useEffect,useState} from "react";
const HeaderCartButton = props =>{
    const cartCtx = useContext(CartContext);
   const numberOfContextItems =  cartCtx.items.reduce((currentNumber, item )=>{
    return currentNumber + item.amount;
    },0)
    const[btnIsHilighed, setBtnState] = useState(false);
    const {items} = cartCtx;
    const btnClasses = `${classes.button} ${btnIsHilighed ? classes.bump :''}`;
    

    useEffect(()=>{
        if(items.length === 0){
           return;
        }
        setBtnState(true);
        
      const timer =  setTimeout(()=>{
            setBtnState(false);
        },300)

        return  () => {
            clearTimeout(timer);
        }
    },[items])
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon/></span>
            <span >Your Cart</span>
            <span className={classes.badge}>
                {numberOfContextItems}
            </span>
        </button>
    )
}
export default HeaderCartButton;