//import { type } from "@testing-library/user-event/dist/type";
//import { useContext } from "react";
import { createContext, useReducer,useContext, useEffect } from "react";
import reducer from "../reducer/cartReducer";



const CartContext = createContext();

const getLocalCartData = () => {
     // let localcartdata = localStorage.getItem("jay");
     // if(localcartdata === []){
     //      return [];
     // }else{
     //      return JSON.parse(localcartdata);
     // }

     let localcartdata = localStorage.getItem("jay");
     if (!localcartdata) {
         return [];
     } else {
         try {
             return JSON.parse(localcartdata);
         } catch (error) {
             console.error("Error parsing local storage data:", error);
             return []; 
         }
     }

};

export const CartProvider = ({children}) => {
   const intialstate = {
    //cart:[],
    cart:getLocalCartData(),
    total_item:"",
    total_price:"",
    shipping_fee:5000
   }
    const[state,dispatch] = useReducer(reducer,intialstate);
    const addToCart = (id,amount,product) => {          
         dispatch({type:"ADD_TO_CART",payload:{id,amount,product}})
    }

    const removeItem = (id) => {
            dispatch({type:"REMOVE_ITEM",payload:id})
    }

//increment and decrement

const setDecrease = (id) => {
    dispatch({type:"SET_DECREMENT",payload:id});
}

const setIncrease = (id) => {
     dispatch({type:"SET_INCREMENT",payload:id});
 }

    const clearCart = () => {
     dispatch({type:"CLEAR_CART"})

    }
    //add data in localstorage
 useEffect(() => {
     dispatch({type:"CART_TOTAL_ITEM"});
      dispatch({type:"CART_TOTAL_PRICE"});

     localStorage.setItem("jay",JSON.stringify(state.cart));
    },[state.cart]);

      return <CartContext.Provider value={{...state,addToCart,removeItem,clearCart,setDecrease,setIncrease }}>
               {children}
            </CartContext.Provider>
}

export const useCartContext = () => {

     return useContext(CartContext);
}