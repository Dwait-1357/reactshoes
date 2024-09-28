import axios from "axios";
import React, { useEffect, useState } from "react";
import "./css/Cart.css";

function Cart() {
  const [cartProduct, setCartProduct] = useState([]);
  const [Error, setError] = useState(null);
  const image_path = "http://127.0.0.1:8000/asset/images/product_images/";

  // Function to update the quantity in the state
  const updateProductQuantity = (index, newQuantity) => {
    setCartProduct((prevProducts) =>
      prevProducts.map((product, i) =>
        i === index
          ? { ...product, quantity: Math.max(newQuantity, 1) } // Prevent quantity from being less than 1
          : product
      )
    );
  };

  //delete from cart
  const deleteProduct = (e, selectedProduct) => {
    e.preventDefault();

    const data = {
      product_id: selectedProduct.id,
      user_id: localStorage.getItem("userId"),
    };
    axios
      .post(`http://127.0.0.1:8000/api/remove-cart-product`, data)
      .then((response) => {
        if (response.data.status === "success") {
          alert(response.data.message);
          setCartProduct((prevProducts) =>
            prevProducts.filter(
              (product) => product.product_id !== selectedProduct.product_id
            )
          );
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error in deleteing product from cart..!", error);
      });
  };

  //get products from cart
  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      getProducts(userId);
    }
  }, []);

  const getProducts = (userId) => {
    axios
      .get(`http://127.0.0.1:8000/api/get-cart-product/${userId}`)
      .then((response) => {
        const products = response.data.products.map((product) => ({
          ...product,
          quantity: product.quantity || 1, // Set default quantity to 1 if undefined
        }));
        setCartProduct(products);
      })
      .catch((e) => {
        console.error("There was an error fetching the products!", e);
        setError("There was an error fetching the products.");
      });
  };

  return (
    <>
      <h2>Cart Products</h2>
      <div className="product-cart">
        <table>
          <thead>
            <tr>
              <td>Product Name</td>
              <td>Product Image</td>
              <td>Product Description</td>
              <td>Product Quantity</td>
              <td>Product Price</td>
              <td>Product Total Amount</td>
            </tr>
          </thead>

          <tbody>
            {cartProduct.length > 0 ? (
              cartProduct.map((product, index) => (
                <tr key={product.product_id}>
                  <td>{product.product_name}</td>
                  <td className="img-column">
                    <img
                      src={image_path + product.product_image}
                      alt={product.product_name}
                      width={30}
                      height={30}
                    />
                  </td>
                  <td>{product.product_description}</td>
                  <td className="quantity-row">
                    <button
                      className="add"
                      id="add"
                      onClick={() =>
                        updateProductQuantity(index, product.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <input
                      type="text"
                      value={product.quantity}
                      readOnly
                      id={`quantity-${product.product_id}`}
                      className="quantity"
                    />
                    <button
                      className="subtract"
                      id="subtract"
                      onClick={() =>
                        updateProductQuantity(index, product.quantity - 1)
                      }
                    >
                      -
                    </button>
                  </td>
                  <td>{product.product_price}</td>
                  <td>
                    {parseInt(product.product_price) *
                      parseInt(product.quantity)}
                  </td>
                  <td>
                    <button onClick={(e) => deleteProduct(e, product)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">
                  <h1>Cart is Empty...!</h1>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Cart;