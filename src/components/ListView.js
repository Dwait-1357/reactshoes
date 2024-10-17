import React from "react";
import { NavLink } from 'react-router-dom';
import axios from "axios";

const ListView = ({ category }) => {
    const image_path = 'http://127.0.0.1:8000/uploads/products/';

    const handleAddToCart = async (productId) => {
        const userId = localStorage.getItem('userId'); // Replace with actual logged-in user ID

        try {
            await axios.post('http://127.0.0.1:8000/api/cart', {
                user_id: userId,
                product_id: productId,
            });
            alert('Product added to cart successfully');
        } catch (error) {
            console.error(error);
            alert('Failed to add product to cart');
        }
    };

    return (
        <>
            <h2 style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>PRODUCT</h2>
            <div className="container mt-4">
                <div className="row">
                    {category.length > 0 ? (
                        category.map(service => (
                            <div className="col-12 mb-4" key={service.id}>
                                <div 
                                    className="card"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                        borderRadius: '8px',
                                        transition: 'box-shadow 0.3s ease-in-out',
                                        flexDirection: 'row'
                                    }}
                                >
                                    <img 
                                        src={image_path + service.image} 
                                        className="card-img-left" 
                                        alt={service.name} 
                                        style={{ height: '150px', width: '150px', objectFit: 'cover' }} 
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{service.name}</h5>
                                        <p className="card-text">Price: ${service.price}</p>
                                        <p className="card-text">Size: {service.size}</p>
                                        <p className="card-text">Category: {service.category}</p>
                                        <p className="card-text">Brand: {service.brand}</p>

                                        <button 
                                            className="btn btn-primary" 
                                            onClick={() => handleAddToCart(service.id)}
                                        >
                                            ADD TO CART
                                        </button> 
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

export default ListView;



//imp import React from "react";
// import { NavLink } from 'react-router-dom';

// const ListView = ({ category }) => {
//     const image_path = 'http://127.0.0.1:8000/uploads/products/';

//     return (
//         <>
//             <h2 style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>Feature Items</h2>
//             <div className="container mt-4">
//                 <div className="row">
//                     {category.length > 0 ? (
//                         category.map(service => (
//                             <div className="col-12 mb-4" key={service.id}>
//                                 <div 
//                                     className="card"
//                                     style={{
//                                         display: 'flex',
//                                         alignItems: 'center',
//                                         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//                                         borderRadius: '8px',
//                                         transition: 'box-shadow 0.3s ease-in-out',
//                                         flexDirection: 'row'
//                                     }}
//                                 >
//                                     <img 
//                                         src={image_path + service.image} 
//                                         className="card-img-left" 
//                                         alt={service.name} 
//                                         style={{ height: '150px', width: '150px', objectFit: 'cover' }} 
//                                     />
//                                     <div className="card-body">
//                                         <h5 className="card-title">{service.name}</h5>
//                                         <p className="card-text">Price: ${service.price}</p>
//                                         <p className="card-text">Size: {service.size}</p>
//                                         <p className="card-text">Category: {service.category}</p>
//                                         <p className="card-text">Category: {service.brand}</p>

//                                         <NavLink to={`/feture/${service.id}`}>
//                                              <button  className="btn btn-primary">ADD TO CART</button>
//                                         </NavLink> 
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

// export default ListView;



// import React from "react";
// import { NavLink } from 'react-router-dom';

// const ListView = ({ category }) => {
//     const image_path = 'http://127.0.0.1:8000/uploads/products/';

//     return (
//         <>
//             <h2 className="text-center mt-3">Feature Items</h2>
//             <div className="container mt-4">
//                 <div className="row">
//                     {category.length > 0 ? (
//                         category.map(service => (
//                             <div className="col-12 mb-4" key={service.id}>
//                                 <div className="card d-flex flex-row" style={{
//                                     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//                                     borderRadius: '8px',
//                                     transition: 'box-shadow 0.3s ease-in-out'
//                                 }}>
//                                     <img
//                                         src={image_path + service.image}
//                                         className="card-img-left"
//                                         alt={service.name}
//                                         style={{ height: '150px', width: '150px', objectFit: 'cover' }}
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

// export default ListView;
