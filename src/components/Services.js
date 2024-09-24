
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';




function Services() {
    
    const [services, setServices] = useState([]);
    const [email, setEmail] = useState('');

    const image_path = 'http://127.0.0.1:8000/uploads/products/';
    useEffect(() => {
        // Fetch services data from the Laravel backend
        axios.post('http://127.0.0.1:8000/api/running')
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
    }, []);
    
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <div className="list-group d-inline-block">
          <Link to="running" className="list-group-item list-group-item-action">Running</Link>
          <Link to="football" className="list-group-item list-group-item-action">Football</Link>
        </div>
      </div>   
       <Outlet />  
    </div> 
    
  );
}

export default Services;
