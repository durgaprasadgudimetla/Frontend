import React, { useReducer } from "react";
import CartContext from "./cart-context";





const defaultCartState ={
    items :[],
    totalAmouunt : 0
}

const cartReducer = (state,action) =>{
    if(action.type === 'ADD'){
        
        const updateTotalAmount = state.totalAmouunt + action.item.price * action.item.amount;
        const existingCartIndex = state.items.findIndex((item) => item.id === action.item.id)
        const existingCartItem = state.items[existingCartIndex];
        
        let updatedItems;
        if(existingCartItem){
          const updatedItem={
                ...existingCartItem,
                amount:existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingCartIndex] = updatedItem;
        }else{
            //updatedItem = {...action.item};
            updatedItems = state.items.concat(action.item);
        }
        
        return {
            items: updatedItems,
            totalAmouunt: updateTotalAmount
        }
    }
    if(action.type === 'REMOVE'){
        const existingCartIndex = state.items.findIndex((item) => item.id === action.id)
        const existingItem = state.items[existingCartIndex];
        const updateTotalAmount = state.totalAmouunt - existingItem.price ;
        let updatedItems;
        if(existingItem.amount === 1){
            updatedItems = state.items.filter(item => item.id !== action.id)
        }else{
            const updatedItem = {...existingItem,amount: existingItem.amount - 1};
            updatedItems = [...state.items]
            updatedItems[existingCartIndex]  = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmouunt: updateTotalAmount
        }
        
    }
    return defaultCartState
}



const CartProvider = props =>{


    const[cartState,dispatchCartAction] = useReducer(cartReducer,defaultCartState);

    
    const addItemToCartHandler = (item) =>{
        dispatchCartAction({type:"ADD",item:item})
    }
    const removeItemToCartHandler = (id) =>{
        dispatchCartAction({type:"REMOVE",id:id})
    }


    const cartContext ={
        items:cartState.items,
        totalAmount: cartState.totalAmouunt,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    }



    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider;

