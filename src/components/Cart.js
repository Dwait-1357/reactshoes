import React, { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    //update quantity increment and decrement
    const updateProductQuantity = (index, newQuantity) => {
        const itemStock = cartItems[index].product.stock;

        if (newQuantity > itemStock) {
            alert("Cannot add more items than available in stock.");
            return;
        }

        if (newQuantity < 1) {
            alert("Quantity cannot be less than 1.");
            return;
        }

        setCartItems((prevProducts) =>
            prevProducts.map((product, i) =>
                i === index
                    ? { ...product, quantity: newQuantity }
                    : product
            )
        );
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

    // total amount calculation
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2);
    };

    // useeffect code
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
                                            <button
                                                className="subtract"
                                                onClick={() => updateProductQuantity(index, parseInt(item.quantity) - 1)}
                                            >
                                                -
                                            </button>
                                            <input 
                                                type="number" 
                                                min="1" 
                                                value={item.quantity} 
                                                style={{ width: '50px', margin: '0 5px' }} 
                                                readOnly 
                                            />
                                            <button
                                                className="add"
                                                onClick={() => updateProductQuantity(index, parseInt(item.quantity) + 1)}
                                            >
                                                +
                                            </button>
                                        </td>
                                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>${subtotal.toFixed(2)}</td>
                                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                            <button 
                                                onClick={() => removeFromCart(item.id)} 
                                                style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                       
                ) : (
                    <p> cart is loading.</p>
                )}
            </div>
            {cartItems.length > 0 && (
                <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
                    Total Amount: ${calculateTotal()}
                </div>
            )}  

                     
        </div>

          
    );
};

export default Cart;
