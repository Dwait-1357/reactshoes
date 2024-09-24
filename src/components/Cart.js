import React from "react";
import { useCartContext } from "../ContextApi/cart_context";
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";
import './Cart.css'; 
import axios from "axios"; 

const Cart = () => {
    
    const { cart, clearCart, total_price, shipping_fee } = useCartContext();

    const placeOrder = async () => {

        const token = localStorage.getItem('userId');
        if(!token)
        {
            alert("please get product into cart");
            return;
        }else{
            const data= {
                items:cart,
                total_price:total_price,
                shipping_fee:shipping_fee,
                user_id:localStorage.getItem("userId"),
            };
            console.log(data);
            axios.post('http://127.0.0.1:8000/api/order',data).then(() => {
                alert("cart sucess");
               
            });
        }
       
    };

    if (cart.length === 0) {
        return <h3>No cart items</h3>;
    }

    return (
        <div className="cart-container">
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((curElem) => (
                        <CartItem key={curElem.id} {...curElem} />
                    ))}
                </tbody>
            </table>
           

            <div className="cart-summary">
                <p>Subtotal: ${total_price}</p>
                <hr/>
                <p>Shipping Fee: ${shipping_fee.toFixed(2)}</p>
                <hr />
                <p>Order Total Price: ${(shipping_fee + total_price)}</p>
            </div>

            <div className="action-buttons">
                <NavLink to="/product">
                    <button className="continue-shopping-btn">Continue Shopping</button>
                </NavLink>
                <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
                <button className="place-order-btn" onClick={placeOrder}>Place Order</button>
            </div>
          
        </div>
    );
};

export default Cart;










































































































































































































































































































































































































































































































// import React from "react";
// import { useCartContext } from "../ContextApi/cart_context";
// import CartItem from "./CartItem";
// const Cart = () => {
//     const{cart} = useCartContext();
    
//     return <> 
//        <p>item</p>
//        <p>price</p>
//        <p>quantiyt</p>
//        <p>subtotal</p>
//        <p>remove</p>

// {
//     cart.map((cur)=>{
//         return <CartItem key={cur.id} {...cur}/>
//     })
// }


         
//            </>
// }

// export default Cart;


//imp
// import React from "react";
// import { useCartContext } from "../ContextApi/cart_context";
// import CartItem from "./CartItem";

// const Cart = () => {
//     const { cart } = useCartContext();
//     //console.log(cart);

//     const cartContainerStyle = {
//         width: '90%',
//         maxWidth: '1200px',
//         margin: 'auto',
//         padding: '20px'
//     };

//     const cartHeaderStyle = {
//         display: 'grid',
//         gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
//         gap: '10px',
//         fontWeight: 'bold',
//         borderBottom: '2px solid #ddd',
//         paddingBottom: '10px',
//         marginBottom: '20px'
//     };

//     const headerItemStyle = {
//         margin: '0'
//     };

//     return (
//         <>
//             <tr>
//                 <th style={headerItemStyle}>image</th>
//                 <th style={headerItemStyle}>name</th>

//                 <th style={headerItemStyle}>Price</th>
//                 <th style={headerItemStyle}>Quantity</th>
//                 <th style={headerItemStyle}>Subtotal</th>
//                 <th style={headerItemStyle}>Remove</th>
//             </tr>

//             {cart.map((curElem) => (
//                <CartItem key={curElem.id} {...curElem} />
//             ))}
//         </>
//     );
// }

// export default Cart;
















//1 import React from "react";
// import { useCartContext } from "../ContextApi/cart_context";
// import CartItem from "./CartItem";
// import { NavLink } from "react-router-dom";
// import { Button } from "bootstrap";

// const Cart = () => {
//     const { cart,clearCart,total_price, shipping_fee } = useCartContext();

//     if(cart.length === 0)
//     {
//       return  <h3>no cart item</h3>
//     }

//     const tableContainerStyle = {
//         width: '90%',
//         maxWidth: '1200px',
//         margin: 'auto',
//         padding: '20px'
//     };

//     const tableStyle = {
//         width: '100%',
//         borderCollapse: 'collapse',
//         marginBottom: '20px'
//     };

//     const tableHeaderStyle = {
//         backgroundColor: '#f8f8f8',
//         borderBottom: '2px solid #ddd',
//         fontWeight: 'bold',
//         textAlign: 'center'
//     };

//     const tableBodyStyle = {
//         textAlign: 'center'
//     };

//     const headerItemStyle = {
//         padding: '10px'
//     };

//     return (
//         <div style={tableContainerStyle}>
//             <table style={tableStyle}>
//                 <thead>
//                     <tr style={tableHeaderStyle}>
//                         <th style={headerItemStyle}>Image</th>
//                         <th style={headerItemStyle}>Name</th>
//                         <th style={headerItemStyle}>Price</th>
//                         <th style={headerItemStyle}>Quantity</th>
//                         <th style={headerItemStyle}>Subtotal</th>
//                         <th style={headerItemStyle}>Remove</th>
//                     </tr>
//                 </thead>
//                 <tbody style={tableBodyStyle}>
//                     {cart.map((curElem) => (
//                         <CartItem key={curElem.id} {...curElem} />
//                     ))}
//                 </tbody>
//             </table>
//            <NavLink to="/product">
//              <button>continue shopping</button>
//            </NavLink>
//            <button onClick={clearCart}>clear cart</button>

//            <p>subtotal:{total_price}</p>
         
//            <p>shipping_fee:{shipping_fee}</p>
//            <hr></hr>
//            <p>order total price = {shipping_fee + total_price}</p>
         
//         </div>
//     );
// }

// export default Cart;


//2 imp import React from "react";
// import { useCartContext } from "../ContextApi/cart_context";
// import CartItem from "./CartItem";
// import { NavLink } from "react-router-dom";
// import './Cart.css'; // Import the CSS file
// import Footer from "./Footer";

// const Cart = () => {
//     const { cart, clearCart, total_price, shipping_fee } = useCartContext();

//     if (cart.length === 0) {
//         return <h3>No cart items</h3>;
//     }

//     return (
//         <div className="cart-container">
//             <table className="cart-table">
//                 <thead>
//                     <tr>
//                         <th>Image</th>
//                         <th>Name</th>
//                         <th>Price</th>
//                         <th>Quantity</th>
//                         <th>Subtotal</th>
//                         <th>Remove</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {cart.map((curElem) => (
//                         <CartItem key={curElem.id} {...curElem} />
//                     ))}
//                 </tbody>
//             </table>
           

//             <div className="cart-summary">
//                 <p>Subtotal: ${total_price}</p>
//                 <hr/>
//                 <p>Shipping Fee: ${shipping_fee.toFixed(2)}</p>
//                 <hr />
//                 <p>Order Total Price: ${(shipping_fee + total_price)}</p>
//             </div>

//             <div className="action-buttons">
//                 <NavLink to="/product">
//                     <button className="continue-shopping-btn">Continue Shopping</button>
//                 </NavLink>
//                 <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
//             </div>
          
//         </div>
//     );
// }

// export default Cart;

