

import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "./Slider";
import { NavLink } from "react-router-dom";
import { useBio, BioProvider } from '../ContextApi/productcontext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

//console.log(userData.id);
const userId = {
    userID : localStorage.getItem('userData.id'),
    
}
console.log(userId);
function Home() {
    
    const {isLoading, category} = useBio();
    const [message, setMessage] = useState(''); // Ensure this is included
    const navigate = useNavigate();
    const image_path = 'http://127.0.0.1:8000/uploads/products/';

    const handleAddToCart = (service) => {
        if (!localStorage.getItem('token')) {
            alert('Please log in to add items to your cart.');
            return;
        }   
        navigate(`/feture/${service.id}`);
    };




    if(isLoading)
    {
        return <div>loading...</div>
    }


    return (
        <>
        <Slider/>
        <>
       <h2 style={{display:'flex',justifyContent:'center', marginTop:'15px'}}>Feauter Items</h2>
        <div className="container mt-4">
            <div className="row">
                {category.length > 0 ? (
                    category.map(service => (
                        <div className="col-md-4 mb-4" key={service.id} {...service}>
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
                                    style={{ height: '200px', width:'300px'}} 
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{service.name}</h5>
                                    <p className="card-text">Price: ${service.price}</p>
                                    <p className="card-text">Size: {service.size}</p>
                                    <p className="card-text">Category: {service.category}</p>
                                    
                                                         
                                           {/* <NavLink to={`/feture/${service.id}`}>
                                           <button  className="btn btn-primary">ADD TO CART</button>
                                           </NavLink> */}

                                        <button 
                                            className="btn btn-primary"
                                            onClick={() => handleAddToCart(service)}
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
            
        
        </>  
    );
}

export default Home;












































































































































































































































































































































































































































































































































// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Slider from "./Slider";
// import { NavLink } from "react-router-dom";
// import { jwtDecode } from 'jwt-decode';

// function Home() {
//     const [services, setServices] = useState([]);
//     const [email, setEmail] = useState('');
      
//     const image_path = 'http://127.0.0.1:8000/uploads/products/';
//     useEffect(() => {
//         // Fetch services data from the Laravel backend
//         axios.post('http://127.0.0.1:8000/api/services')
//             .then(response => {
//                 setServices(response.data);  
//             })
//             .catch(error => {
//                 console.error('Error fetching the services:', error);
//             });

//         // Retrieve token from local storage and decode it (if it's a JWT)
//         const token = localStorage.getItem('token');
//         if (token) {
//             try {
//                 const decoded = jwtDecode(token);   // Decode the token
//                 setEmail(decoded.email);  // Assume the token contains an email
//             } catch (error) {
//                 console.error('Invalid token:', error);
//             }
//         }
//     }, []);

//     return (
//         <>
//         <Slider/>
//         <h2 style={{display:'flex',justifyContent:'center', marginTop:'15px'}}>Feature Items</h2>
//         <div className="container mt-4">
//             <div className="row">
//                 {services.length > 0 ? (
//                     services.map(service => (
//                         <div className="col-md-4 mb-4" key={service.id}>
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
//                                     <NavLink to={`/running/${service.id}`} >
//                                     <button  className="btn btn-primary">ADD TO CART</button>
//                                     </NavLink>
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
//         </>  
//     );
// }

// export default Home;
