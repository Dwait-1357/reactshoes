import React, { useEffect, useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, useParams } from "react-router-dom"; // Import useParams

function Home() {
    const { categoryId } = useParams(); // Access categoryId from URL parameters
    const [services, setServices] = useState([]);
    const [email, setEmail] = useState('');

    const image_path = 'http://127.0.0.1:8000/uploads/products/';
    
    useEffect(() => {
        // Fetch services data based on categoryId from the Laravel backend
        axios.post(`http://127.0.0.1:8000/api/services/${categoryId || ''}`) // Use the categoryId if available
            .then(response => {
                setServices(response.data);  
            })
            .catch(error => {
                console.error('Error fetching the services:', error);
            });

        // Retrieve email from local storage
        const userData = JSON.parse(localStorage.getItem('token'));
        if (userData && userData.email) {
            setEmail(userData.email);
        }
    }, [categoryId]); // Re-fetch when categoryId changes

    return (
        <>
        <h2 style={{display:'flex',justifyContent:'center', marginTop:'15px'}}>Featured Items</h2>
        <div className="container mt-4">
            <div className="row">
                {services.length > 0 ? (
                    services.map(service => (
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
                                    style={{ height: '200px', width:'300px'}} 
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{service.name}</h5>
                                    <p className="card-text">Price: ${service.price}</p>
                                    <p className="card-text">Size: {service.size}</p>
                                    <p className="card-text">Category: {service.category}</p>
                                    <NavLink to={`/running/${service.id}`}>
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
}

export default Home;
