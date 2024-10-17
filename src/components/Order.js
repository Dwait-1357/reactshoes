import React, { useEffect, useState } from "react"; 
import axios from "axios";

const Order = () => {
    const [orderItems, setOrderItems] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const fetchOrderItems = async () => {
        const userId = localStorage.getItem("userId");
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/cart/${userId}`);
            setOrderItems(response.data);
        } catch (error) {
            console.error("Error fetching order items:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrderItems();
    }, []);

    const calculateTotal = () => {
        return orderItems.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2);
    };

    const handlePayment = async () => {
        const totalAmount = calculateTotal() * 100; // Convert to paise
        const userEmail = localStorage.getItem("userEmail");

        try {
            // Step 1: Create an order on the backend
            const response = await axios.post('http://127.0.0.1:8000/api/create-order', {
                amount: totalAmount,
                currency: 'INR',
                receipt: `receipt#${new Date().getTime()}`,
                user_email: userEmail,
            });
            const { id, currency, amount } = response.data;

            // Step 2: Setup Razorpay options
            const options = {
                key: 'YOUR_RAZORPAY_KEY_ID',
                amount: amount,
                currency: currency,
                name: 'Your Company Name',
                description: 'Order Payment',
                order_id: id,
                handler: async function (response) {
                    alert('Payment successful: ' + response.razorpay_payment_id);

                    // Step 3: Save order details to the backend
                    try {
                        await axios.post('http://127.0.0.1:8000/api/save-order', {
                            user_email: userEmail,
                            amount: totalAmount,
                            razorpay_order_id: id,
                            razorpay_payment_id: response.razorpay_payment_id,
                        });
                        alert('Order saved successfully!');
                    } catch (error) {
                        console.error("Error saving order:", error);
                        alert('Failed to save order.');
                    }
                },
                prefill: {
                    name: 'Customer Name',
                    email: userEmail,
                    contact: '9999999999',
                },
                theme: {
                    color: '#F37254',
                },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (error) {
            console.error("Error creating order:", error);
            alert("Payment initiation failed.");
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>My Order Detail</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {orderItems.length > 0 ? (
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr>
                                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Image</th>
                                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
                                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Size</th>
                                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Price</th>
                                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Quantity</th>
                                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderItems.map(item => {
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
                                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.quantity}</td>
                                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>${subtotal.toFixed(2)}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    ) : (
                        <p>No items in your order.</p>
                    )}
                    {orderItems.length > 0 && (
                        <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
                            <div>Total Amount: ${calculateTotal()}</div>
                            <button onClick={handlePayment} style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none', cursor: 'pointer', marginRight: '50px' }}>
                                Pay Now
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Order;
