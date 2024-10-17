import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink,useNavigate } from "react-router-dom";
import { FaTrash } from 'react-icons/fa';


const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate(); 
    // Update quantity and sync with the backend

    
     const updateProductQuantity =  (index, newQuantity) => {
        const itemStock = cartItems[index].product.stock;
    
        if (newQuantity > itemStock) {
            alert("Cannot add more items than available in stock.");
            return;
        }
    
        if (newQuantity < 1) {
            alert("Quantity cannot be less than 1.");
            return;
        }
    
        const itemId = cartItems[index].product.id; // Assuming product ID is available
        const userId = localStorage.getItem("userId");
        console.log(userId);
    
        console.log(`Updating quantity for item ${itemId} to ${newQuantity}`); // Debug log
    
        try {
            const response =  axios.post(`http://127.0.0.1:8000/api/api/cart/${userId}/${itemId}`, { quantity: newQuantity });
            console.log("Response from server:", response.data); // Debug log
            setCartItems((prevProducts) =>
                prevProducts.map((product, i) =>
                    i === index ? { ...product, quantity: newQuantity } : product
                )
            );
        } catch (error) {
            console.error("Error updating quantity:", error);
            alert("Failed to update quantity."); // Alert user about the error
        }
    };
    
    
    // Fetch cart items from the API
    const fetchCartItems = async () => {
        const userId = localStorage.getItem("userId");
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/cart/${userId}`);
            setCartItems(response.data);
        } catch (error) {
            console.error("Error fetching cart items:", error);
        }
    };

    // Remove item from cart
    const removeFromCart = async (itemId) => {
        const userId = localStorage.getItem("userId");
        try {
            await axios.delete(`http://127.0.0.1:8000/api/cart/${userId}/${itemId}`);
            fetchCartItems();
        } catch (error) {
            console.error("Error removing item from cart:", error);
        }
    };

    // Total amount calculation
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2);
    };

  

        const placeOrder = async () => {
        const userId = localStorage.getItem("userId");
        const userEmail = localStorage.getItem("userEmail");
        const totalAmount = calculateTotal();
        const orderItems = cartItems.map(item => ({
            product_id: item.product.id,
            quantity: item.quantity,
            price: item.product.price
        }));
    
        const orderData = {
            user_id: userId,
            email: userEmail,
            total_amount: totalAmount,
            items: orderItems,
        };
    
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/orders', orderData);
            if (response.status === 200) {
                alert("Order placed successfully!");
                navigate('/order');
            } else {
                alert("Failed to place the order.");
            }
        } catch (error) {
            console.error("Error placing order:", error);
            alert("An error occurred while placing the order.");
        }
    };

    // useEffect code
    useEffect(() => {
        fetchCartItems();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ marginTop: '20px' }}>
                {cartItems.length > 0 ? (
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Image</th>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Size</th>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Price</th>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Quantity</th>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Subtotal</th>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => {
                                const subtotal = item.product.price * item.quantity;
                                return (
                                    <tr key={item.id}>
                                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                            <img 
                                                src={`http://127.0.0.1:8000/uploads/products/${item.product.image}`} 
                                                alt={item.product.name} 
                                                style={{ height: '100px', width: '100px' }} 
                                            />
                                        </td>
                                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.product.name}</td>
                                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.product.size}</td>
                                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>${item.product.price}</td>
                                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                          
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <button
                                                onClick={() => updateProductQuantity(index, parseInt(item.quantity) - 1)}
                                                style={{
                                                    background: 'lightgray',
                                                    border: 'none',
                                                    padding: '5px 10px',
                                                    cursor: 'pointer',
                                                    borderRadius: '5px',
                                                    marginRight: '5px',
                                                    fontWeight: 'bold'
                                                }}
                                            >
                                                -
                                            </button>
                                            <input
                                                type="number"
                                                min="1"
                                                value={item.quantity}
                                                style={{ width: '50px', textAlign: 'center', margin: '0 5px', border: '1px solid #ddd', borderRadius: '5px' }}
                                                readOnly
                                            />
                                            <button
                                                onClick={() => updateProductQuantity(index, parseInt(item.quantity) + 1)}
                                                style={{
                                                    background: 'lightgray',
                                                    border: 'none',
                                                    padding: '5px 10px',
                                                    cursor: 'pointer',
                                                    borderRadius: '5px',
                                                    marginLeft: '5px',
                                                    fontWeight: 'bold'
                                                }}
                                            >
                                                +
                                            </button>
                                        </div>
                                
            
                                     
                                         </td>

                                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>${subtotal.toFixed(2)}</td>
                                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                            {/* <button 
                                                onClick={() => removeFromCart(item.id)} 
                                                style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                                            >
                                                Remove
                                            </button> */}
                                               <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                                 <FaTrash size={20} color="red" />
                                             </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                ) : (
                    <p>Cart is loading.</p>
                )}
            </div>
            {cartItems.length > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', fontWeight: 'bold' }}>
                    <div>Total Amount: ${calculateTotal()}</div>
                    {/* <NavLink to="/order" style={{ textDecoration: 'none' }}>
                        <button style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none', cursor: 'pointer',marginRight:'50px' }}>
                            Place Order
                        </button>
                    </NavLink> */}
<button 
    onClick={placeOrder}  // Call placeOrder on button click
    style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none', cursor: 'pointer', marginRight: '50px' }}>
    Place Order
</button>
                </div>
            )}
        </div>
    );
};

export default Cart;


























































































































































































































































































// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Cart = () => {
//     const [cartItems, setCartItems] = useState([]);

//     //update quantity increment and decrement
//     const updateProductQuantity = (index, newQuantity) => {
//         const itemStock = cartItems[index].product.stock;

//         if (newQuantity > itemStock) {
//             alert("Cannot add more items than available in stock.");
//             return;
//         }

//         if (newQuantity < 1) {
//             alert("Quantity cannot be less than 1.");
//             return;
//         }

//         setCartItems((prevProducts) =>
//             prevProducts.map((product, i) =>
//                 i === index
//                     ? { ...product, quantity: newQuantity }
//                     : product
//             )
//         );
//     };

//     // Fetch cart items from the API
//     const fetchCartItems = async () => {
//         const userId = localStorage.getItem("userId");
//         try {
//             const response = await axios.get(`http://127.0.0.1:8000/api/cart/${userId}`);
//             setCartItems(response.data);
//         } catch (error) {
//             console.error("Error fetching cart items:", error);
//         }
//     };

//     // Remove item from cart
//     const removeFromCart = async (itemId) => {
//         const userId = localStorage.getItem("userId");
//         try {
//             await axios.delete(`http://127.0.0.1:8000/api/cart/${userId}/${itemId}`);
//             fetchCartItems();
//         } catch (error) {
//             console.error("Error removing item from cart:", error);
//         }
//     };

//     // total amount calculation
//     const calculateTotal = () => {
//         return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2);
//     };

//     // useeffect code
//     useEffect(() => {
//         fetchCartItems();
//     }, []);

//     return (
//         <div style={{ padding: '20px' }}>

//             <div style={{ marginTop: '20px' }}>
//                 {cartItems.length > 0 ? (
//                     <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//                         <thead>
//                             <tr>
//                                 <th style={{ border: '1px solid #ddd', padding: '8px' }}>Image</th>
//                                 <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
//                                 <th style={{ border: '1px solid #ddd', padding: '8px' }}>Size</th>
//                                 <th style={{ border: '1px solid #ddd', padding: '8px' }}>Price</th>
//                                 <th style={{ border: '1px solid #ddd', padding: '8px' }}>Quantity</th>
//                                 <th style={{ border: '1px solid #ddd', padding: '8px' }}>Subtotal</th>
//                                 <th style={{ border: '1px solid #ddd', padding: '8px' }}>Remove</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {cartItems.map((item, index) => {
//                                 const subtotal = item.product.price * item.quantity;
//                                 return (
//                                     <tr key={item.id}>
//                                         <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                                             <img 
//                                                 src={`http://127.0.0.1:8000/uploads/products/${item.product.image}`} 
//                                                 alt={item.product.name} 
//                                                 style={{ height: '100px', width: '100px' }} 
//                                             />
//                                         </td>
//                                         <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.product.name}</td>
//                                         <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.product.size}</td>
//                                         <td style={{ border: '1px solid #ddd', padding: '8px' }}>${item.product.price}</td>
//                                         <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                                             <button
//                                                 className="subtract"
//                                                 onClick={() => updateProductQuantity(index, parseInt(item.quantity) - 1)}
//                                             >
//                                                 -
//                                             </button>
//                                             <input 
//                                                 type="number" 
//                                                 min="1" 
//                                                 value={item.quantity} 
//                                                 style={{ width: '50px', margin: '0 5px' }} 
//                                                 readOnly 
//                                             />
//                                             <button
//                                                 className="add"
//                                                 onClick={() => updateProductQuantity(index, parseInt(item.quantity) + 1)}
//                                             >
//                                                 +
//                                             </button>
//                                         </td>
//                                         <td style={{ border: '1px solid #ddd', padding: '8px' }}>${subtotal.toFixed(2)}</td>
//                                         <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                                             <button 
//                                                 onClick={() => removeFromCart(item.id)} 
//                                                 style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
//                                             >
//                                                 Remove
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 );
//                             })}
//                         </tbody>
//                     </table>
                       
//                 ) : (
//                     <p> cart is loading.</p>
//                 )}
//             </div>
//             {cartItems.length > 0 && (
//                 <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
//                     Total Amount: ${calculateTotal()}
//                 </div>
//             )}
         
                     
//         </div>
          
//     );
// };

// export default Cart;

///////////////////////////////////////////////////








// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Cart = () => {
//     const [cartItems, setCartItems] = useState([]);

//    // update quantity increment and decrement
//     const updateProductQuantity = (index, newQuantity) => {

//         const itemStock = cartItems[index].product.stock;

//         if (newQuantity > itemStock) {
//             alert("Cannot add more items than available in stock.");
//             return;
//         }

//         if (newQuantity < 1) {
//             alert("Quantity cannot be less than 1.");
//             return;
//         }

//         const updateProduct = {
//             ...cartItems[index],
//             quantity: newQuantity, // Use the new quantity directly
//         };
//         setCartItems((prevProducts) => {
//             prevProducts.map((product,i) => (i === index ? updateProduct : product))
//         });

//         const data = {
//             cart_id : updateProduct.id,
//             product_id: updateProduct.product_id,
//             quantity: updateProduct.quantity
//         }

//         axios.post('http://127.0.0.1:8000/api/update-cart-product',data)
//          .then((response) => {
//             if(response.data.status === "success")
//             {
//                 console.log("quentity updated successfully");
//             }else {
//                 console.log("error updating quantity",response.data.message);
//                 alert(response.data.message);
//             }
//          })
//           .catch((error) => {
//             console.log("error updating quantity",error);
//             alert("an error occurred while updating the quantity.");
//           });

       
//     };

//     // Fetch cart items from the API
//     const fetchCartItems = async () => {
//         const userId = localStorage.getItem("userId");
//         try {
//             const response = await axios.get(`http://127.0.0.1:8000/api/cart/${userId}`);
//             setCartItems(response.data);
//         } catch (error) {
//             console.error("Error fetching cart items:", error);
//         }
//     };

//     // Remove item from cart
//     const removeFromCart =  (itemId) => {
//         const userId = localStorage.getItem("userId");
//         try {
//              axios.delete(`http://127.0.0.1:8000/api/cart/${userId}/${itemId}`);
//             fetchCartItems();
//         } catch (error) {
//             console.error("Error removing item from cart:", error);
//         }
//     };

//     // total amount calculation
//     const calculateTotal = () => {
//         return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2);
//     };

//     // useeffect code
//     useEffect(() => {
//         fetchCartItems();
//     }, []);

//     return (
//         <div style={{ padding: '20px' }}>
          
//             <div style={{ marginTop: '20px' }}>
//                 {cartItems.length > 0 ? (
//                     <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//                         <thead>
//                             <tr>
//                                 <th style={{ border: '1px solid #ddd', padding: '8px' }}>Image</th>
//                                 <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
//                                 <th style={{ border: '1px solid #ddd', padding: '8px' }}>Size</th>
//                                 <th style={{ border: '1px solid #ddd', padding: '8px' }}>Price</th>
//                                 <th style={{ border: '1px solid #ddd', padding: '8px' }}>Quantity</th>
//                                 <th style={{ border: '1px solid #ddd', padding: '8px' }}>Subtotal</th>
//                                 <th style={{ border: '1px solid #ddd', padding: '8px' }}>Remove</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {cartItems.map((item, index) => {
//                                 const subtotal = item.product.price * item.quantity;
//                                 return (
//                                     <tr key={item.id}>
//                                         <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                                             <img 
//                                                 src={`http://127.0.0.1:8000/uploads/products/${item.product.image}`} 
//                                                 alt={item.product.name} 
//                                                 style={{ height: '100px', width: '100px' }} 
//                                             />
//                                         </td>
//                                         <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.product.name}</td>
//                                         <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.product.size}</td>
//                                         <td style={{ border: '1px solid #ddd', padding: '8px' }}>${item.product.price}</td>
//                                         <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                                             <button
//                                                 className="subtract"
//                                                 onClick={() => updateProductQuantity(index,(item.product.quantity) - 1)}
//                                             >
//                                                 -
//                                             </button>
//                                             <input 
//                                                 type="number" 
//                                                 min="1" 
//                                                 value={item.quantity} 
//                                                 style={{ width: '50px', margin: '0 5px' }} 
//                                                 readOnly 
//                                             />
//                                             <button
//                                                 className="add"
//                                                 onClick={() => updateProductQuantity(index, (item.product.quantity) + 1)}
//                                             >
//                                                 +
//                                             </button>
//                                         </td>
//                                         <td style={{ border: '1px solid #ddd', padding: '8px' }}>${subtotal.toFixed(2)}</td>
//                                         <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                                             <button 
//                                                 onClick={() => removeFromCart(item.product.id)} 
//                                                 style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
//                                             >
//                                                 Remove
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 );
//                             })}
//                         </tbody>
//                     </table>
                       
//                 ) : (
//                     <p> cart is loading.</p>
//                 )}
//             </div>
//             {cartItems.length > 0 && (
//                 <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
//                     Total Amount: ${calculateTotal()}
//                 </div>
//             )}  

                     
//         </div>

          
//     );
// };

// export default Cart;
