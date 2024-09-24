import React from "react";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../ContextApi/cart_context";

const CartItem = ({ id, name, image, amount, price }) => {
    const {removeItem,setIncrease,setDecrease } = useCartContext();
    const numericPrice = Number(price);
    const subtotal = numericPrice * amount;

    const imgStyle = {
        width: '80px',
        height: '80px',
        objectFit: 'cover'
    };

    const removeIconStyle = {
        cursor: 'pointer',
        color: 'red',
        fontSize: '20px'
    };

    return (
        <tr>
            <td>
                <img src={image} alt={name} style={imgStyle} />
            </td>
            <td>
                <p>{name}</p>
            </td>
            <td>
                <p>${numericPrice.toFixed(2)}</p>
            </td>
            <td>
                <CartAmountToggle amount={amount} setDecrease={() => setDecrease(id)} setIncrease={() => setIncrease(id)} />
            </td>
            <td>
                <p>${subtotal.toFixed(2)}</p>
            </td>
            <td>
                <FaTrash style={removeIconStyle} onClick={() => removeItem(id)} />
                    
            </td>
        </tr>
    );
}

export default CartItem;




























































































































































































// import React from "react";
// import CartAmountToggle from "./CartAmountToggle";
// import { FaTrash } from "react-icons/fa";

// const CartItem = ({id,name,image,brand,amount,price}) => {

    
//     const setDecrease = () => { 
//        // amount > 1 ? setAmount(amount - 1) : setAmount(1);
//   }

//   const setIncrease = () => {
       
//     //  amount < stock ? setAmount(amount + 1) : setAmount(stock);
//   }
//     <>
//     <img src={image} alt={id}/>
//     <p>{name}</p>
    
//     <p>{price}</p>
//     <p>{price * amount}</p>

//     <FaTrash className="remove_icon"/>


//     <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease}/>


    
//     </>
// }

// export default CartItem;

//imp
// import React from "react";
// import CartAmountToggle from "./CartAmountToggle";
// import { FaTrash } from "react-icons/fa";

// const CartItem = ({ id, name, image,  amount, price }) => {
//    // console.log(image);
//     const setDecrease = () => { 
//         // Add logic if needed
//     }

//     const setIncrease = () => {
//         // Add logic if needed
//     }

//     // Convert price to a number if it's not already one
//     const numericPrice = Number(price);
//     const subtotal = numericPrice * amount;

//     // Ensure id is a string for the alt attribute
//     const altText = String(id || "default-alt-text");

//     const cartItemStyle = {
//         display: 'flex',
//         alignItems: 'center',
//         borderBottom: '1px solid #ddd',
//         padding: '10px 0',
//         gap: '10px'
//     };

//     const imgStyle = {
//         width: '80px',
//         height: '80px',
//         objectFit: 'cover'
//     };

//     const detailsStyle = {
//         flex: '1',
//         marginRight: '20px'
//     };

//     const nameStyle = {
//         fontSize: '16px',
//         fontWeight: 'bold'
//     };

//     const priceStyle = {
//         fontWeight: 'bold'
//     };

//     const subtotalStyle = {
//         color: '#333'
//     };

//     const removeIconStyle = {
//         cursor: 'pointer',
//         color: 'red',
//         fontSize: '20px'
//     };

//     return (
//         <tr style={cartItemStyle}>
//         <td>  <img src={image} alt={altText} style={imgStyle}/></td>  
           
//             <td>  <p style={nameStyle}>{name}</p></td>  
//             <td>   <p style={priceStyle}>${numericPrice.toFixed(2)}</p></td> 
//             <td> <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease}/></td>

//             <td>   <p style={subtotalStyle}> ${subtotal.toFixed(2)}</p></td> 
           
//             <td><FaTrash style={removeIconStyle}/></td>
//         </tr>
//     );
// }

// export default CartItem;
