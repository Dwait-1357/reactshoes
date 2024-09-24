import React from "react";
import { NavLink } from 'react-router-dom';

const ListView = ({ category }) => {
    const image_path = 'http://127.0.0.1:8000/uploads/products/';

    return (
        <>
            <h2 style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>Feature Items</h2>
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
                                        <p className="card-text">Category: {service.brand}</p>

                                        <NavLink to={`/feture/${service.id}`}>
                                             <button  className="btn btn-primary">ADD TO CART</button>
                                        </NavLink> 
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
