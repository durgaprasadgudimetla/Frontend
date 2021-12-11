import { useContext } from 'react'
import classes from './Cart.module.css'
import Model from './Model'
import CartContext from '../store/cart-context'
import CartItem from './CartItem'


 
 const Cart = props =>{
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    console.log(hasItems);
    
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item,amount:1});
    } 
    const cartItemRemoveHandler =  (id) =>{
        cartCtx.removeItem(id);
    }

    console.log(cartCtx.items);

    const cartItems = 
    (<ul className={classes['cart-items']}>
        {cartCtx.items.map( (item) => (
        <CartItem 
            key={item.id}  
            name={item.name} 
            amount={item.amount} 
            price={item.price} 
            onRemove={cartItemRemoveHandler.bind(null,item.id)} 
            onAdd={cartItemAddHandler.bind(null,item)} 
        />
        ))}
    </ul>);

    console.log(cartItems);
    return (
        <Model onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>close</button>
               {hasItems && <button className={classes.button}>Order</button>}

            </div>
        </Model>
    )
}
export default Cart;