import React from "react";
 import { NavLink } from 'react-router-dom';
  import axios from "axios";

const GridView = ({ category }) => {
    const image_path = 'http://127.0.0.1:8000/uploads/products/';

    const handleAddToCart = async (productId) => {
        try {
            const userId = localStorage.getItem('userId');
            const response = await axios.post('http://127.0.0.1:8000/api/cart', {
                user_id: userId,
                product_id: productId,
            });
            alert('Product added to cart successfully');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert(error.response.data.message); // Display specific error message from server
            } else {
                console.error(error);
                alert('Failed to add product to cart');
            }
        }
    };

    return (
        <>
            <h2 style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>PRODUCT</h2>
            <div className="container mt-4">
                <div className="row">
                    {category.length > 0 ? (
                        category.map(service => (
                            <div className="col-md-4 mb-4" key={service.id}>
                                <div
                                    className="card"
                                    style={{
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                        borderRadius: '8px',
                                        transition: 'box-shadow 0.3s ease-in-out'
                                    }}
                                >
                                    <img
                                        src={image_path + service.image}
                                        className="card-img-top"
                                        alt={service.name}
                                        style={{ height: '200px', width: '300px' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{service.name}</h5>
                                        <p className="card-text">Price: ${service.price}</p>
                                        <p className="card-text">Size: {service.size}</p>
                                        <p className="card-text">Category: {service.category}</p>
                                        <p className="card-text">Brand: {service.brand}</p>
                                        {service.stock > 0 ? ( // Check if stock is available
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => handleAddToCart(service.id)}
                                            >
                                                ADD TO CART
                                            </button>
                                        ) : (
                                            <p className="text-danger">Out of Stock</p> // Show out of stock message
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12">
                            <div className="alert alert-info" role="alert">
                                No services available.
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
export default GridView;



//17 import React from "react";
// import { NavLink } from 'react-router-dom';
// import axios from "axios";

// const GridView = ({ category }) => {
//     const image_path = 'http://127.0.0.1:8000/uploads/products/';

//     const handleAddToCart = async (productId) => {
//         try {
//             const userId = localStorage.getItem('userId'); // Replace with actual logged-in user ID
//             await axios.post('http://127.0.0.1:8000/api/cart', {
//                 user_id: userId,
//                 product_id: productId,
//             });
//             alert('Product added to cart successfully');
//         } catch (error) {
//             console.error(error);
//             alert('Failed to add product to cart');
//         }
//     };

//     return (
//         <>
//             <h2 style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>PRODUCT</h2>
//             <div className="container mt-4">
//                 <div className="row">
//                     {category.length > 0 ? (
//                         category.map(service => (
//                             <div className="col-md-4 mb-4" key={service.id}>
//                                 <div 
//                                     className="card"
//                                     style={{
//                                         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//                                         borderRadius: '8px',
//                                         transition: 'box-shadow 0.3s ease-in-out'
//                                     }}
//                                 >
//                                     <img 
//                                         src={image_path + service.image} 
//                                         className="card-img-top" 
//                                         alt={service.name} 
//                                         style={{ height: '200px', width: '300px' }} 
//                                     />
//                                     <div className="card-body">
//                                         <h5 className="card-title">{service.name}</h5>
//                                         <p className="card-text">Price: ${service.price}</p>
//                                         <p className="card-text">Size: {service.size}</p>
//                                         <p className="card-text">Category: {service.category}</p>
//                                         <p className="card-text">Brand: {service.brand}</p>
//                                         <button 
//                                             className="btn btn-primary" 
//                                             onClick={() => handleAddToCart(service.id)}
//                                         >
//                                             ADD TO CART
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <div className="col-12">
//                             <div className="alert alert-info" role="alert">
//                                 No services available.
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default GridView;



//imp21 import React from "react";
// import Product from "./Product";
// import Feture from "./Feture";
// import { NavLink } from 'react-router-dom';
// import { useCartContext } from "../ContextApi/cart_context";
// import axios from "axios"; 


// const GridView = ({category}) => {
 
   
    

//     const image_path = 'http://127.0.0.1:8000/uploads/products/';

//     return(        
           
//         <>
//        <h2 style={{display:'flex',justifyContent:'center', marginTop:'15px'}}>Feauter Items</h2>
//         <div className="container mt-4">
//             <div className="row">
//                 {category.length > 0 ? (
//                     category.map(service => (
//                         <div className="col-md-4 mb-4" key={service.id} {...service}>
//                             <div 
//                                 className="card"
//                                 style={{
//                                     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
//                                     borderRadius: '8px',
//                                     transition: 'box-shadow 0.3s ease-in-out' 
//                                 }}
//                             >
//                                 <img 
//                                     src={image_path + service.image} 
//                                     className="card-img-top" 
//                                     alt={service.name} 
//                                     style={{ height: '200px', width:'300px'}} 
//                                 />
//                                 <div className="card-body">
//                                     <h5 className="card-title">{service.name}</h5>
//                                     <p className="card-text">Price: ${service.price}</p>
//                                     <p className="card-text">Size: {service.size}</p>
//                                     <p className="card-text">Category: {service.category}</p>
//                                     <p className="card-text">brand: {service.brand}</p>

//                                     <NavLink to={`/feture/${service.id}`}>
//                                     <button  className="btn btn-primary">ADD TO CART</button>
//                                     </NavLink>  


                                    
//                                      {/* <button className="btn btn-primary" onClick={placeOrder}>Add To Cart</button> */}
                                    


//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <div className="col-12">
//                         <div className="alert alert-info" role="alert">
//                             No services available.
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
                 
//                </>
            
//             );
// }
// export default GridView;

























































// import React from "react";
// import { NavLink } from 'react-router-dom';

// const GridView = ({ category }) => {
//     const image_path = 'http://127.0.0.1:8000/uploads/products/';

//     return (
//         <>
//             <h2 className="text-center mt-3">Feature Items</h2>
//             <div className="container mt-4">
//                 <div className="row">
//                     {category.length > 0 ? (
//                         category.map(service => (
//                             <div className="col-md-4 mb-4" key={service.id}>
//                                 <div className="card" style={{
//                                     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//                                     borderRadius: '8px',
//                                     transition: 'box-shadow 0.3s ease-in-out'
//                                 }}>
//                                     <img
//                                         src={image_path + service.image}
//                                         className="card-img-top"
//                                         alt={service.name}
//                                         style={{ height: '200px', width: '300px', objectFit: 'cover' }}
//                                     />
//                                     <div className="card-body">
//                                         <h5 className="card-title">{service.name}</h5>
//                                         <p className="card-text">Price: ${service.price}</p>
//                                         <p className="card-text">Size: {service.size}</p>
//                                         <p className="card-text">Category: {service.category}</p>
//                                         <p className="card-text">Brand: {service.brand}</p>
//                                         <NavLink to={`/feature/${service.id}`}>
//                                             <button className="btn btn-primary">ADD TO CART</button>
//                                         </NavLink>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <div className="col-12">
//                             <div className="alert alert-info" role="alert">
//                                 No products available.
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default GridView;



// import React from "react";
// import { NavLink } from 'react-router-dom';

// const GridView = ({ category }) => {
//     const image_path = 'http://127.0.0.1:8000/uploads/products/';

//     const styles = {
//         container: {
//             padding: '20px',
//             backgroundColor: '#f8f9fa',
//         },
//         header: {
//             textAlign: 'center',
//             marginTop: '15px',
//             fontSize: '24px',
//             fontWeight: 'bold',
//         },
//         card: {
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//             borderRadius: '8px',
//             transition: 'box-shadow 0.3s ease-in-out',
//             overflow: 'hidden',
//             marginBottom: '20px',
//         },
//         cardImage: {
//             height: '200px',
//             width: '100%',
//             objectFit: 'cover',
//         },
//         cardBody: {
//             padding: '15px',
//         },
//         cardTitle: {
//             fontSize: '18px',
//             fontWeight: 'bold',
//             marginBottom: '10px',
//         },
//         cardText: {
//             marginBottom: '10px',
//         },
//         button: {
//             backgroundColor: '#007bff',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             padding: '10px 20px',
//             cursor: 'pointer',
//             transition: 'background-color 0.3s',
//         },
//         buttonHover: {
//             backgroundColor: '#0056b3',
//         },
//         alert: {
//             textAlign: 'center',
//             padding: '20px',
//             backgroundColor: '#d1ecf1',
//             color: '#0c5460',
//         },
//     };

//     return (
//         <div style={styles.container}>
//             <h2 style={styles.header}>Feature Items</h2>
//             <div className="container mt-4">
//                 <div className="row">
//                     {category.length > 0 ? (
//                         category.map(service => (
//                             <div className="col-md-4 mb-4" key={service.id}>
//                                 <div style={styles.card}>
//                                     <img
//                                         src={image_path + service.image}
//                                         className="card-img-top"
//                                         alt={service.name}
//                                         style={styles.cardImage}
//                                     />
//                                     <div style={styles.cardBody}>
//                                         <h5 style={styles.cardTitle}>{service.name}</h5>
//                                         <p style={styles.cardText}>Price: ${service.price}</p>
//                                         <p style={styles.cardText}>Size: {service.size}</p>
//                                         <p style={styles.cardText}>Category: {service.category}</p>
//                                         <p style={styles.cardText}>Brand: {service.brand}</p>
//                                         <NavLink to={`/feature/${service.id}`}>
//                                             <button
//                                                 style={styles.button}
//                                                 onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
//                                                 onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
//                                             >
//                                                 ADD TO CART
//                                             </button>
//                                         </NavLink>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <div className="col-12">
//                             <div style={styles.alert}>
//                                 No products available.
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default GridView;
