import { useState } from "react";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../ContextApi/cart_context";
// import Footer from "./Footer";

const AddToCart = ({product}) => {

    const{addToCart} = useCartContext();
    const{id,stock} = product;
    // const data ={
    //     token : localStorage.getItem('userData')
    //     }
    //     console.log(data);
    const[amount,setAmount] = useState(1);
    const setDecrease = () => { 
          amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }

    const setIncrease = () => {
         
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }

    return <>
         {/* <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease}/> */}
         {/* <NavLink to="/cart" onClick={ () => addToCart(id,amount,product)}>AddToCart</NavLink> */}
         

          </>
}

export default AddToCart;