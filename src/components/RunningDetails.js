import React, { useEffect, useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, useParams } from "react-router-dom";

function RunningDetails({props}) {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    const image_path = 'http://127.0.0.1:8000/uploads/products/';
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/services/${id}`)
            .then(response => {
                setService(response.data); 
                setLoading(false); 
            })
            .catch(error => {
                console.error('Error fetching the service:', error);
                setError('Failed to load service'); 
                setLoading(false); 
            });
    }, [id]);

    if (loading) {
        return (
           
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div className="spinner-border" role="status" style={{ width: '3rem', height: '3rem' }}>
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8d7da', color: '#721c24', borderRadius: '0.25rem' }}>
                {error}
            </div>
        );
    }

    return (
        <div style={{ padding: '2rem' }}>
            {service ? (
                <div style={{ maxWidth: '600px', margin: '0 auto', border: '1px solid #dee2e6', borderRadius: '0.25rem', boxShadow: '0 0 1rem rgba(0,0,0,0.1)' }}>
                    <img 
                        src={image_path + service.image} 
                        alt={service.name} 
                        style={{ width: '100%', height: '400px', objectFit: 'cover', borderTopLeftRadius: '0.25rem', borderTopRightRadius: '0.25rem' }} 
                    />
                    <div style={{ padding: '1rem' }}>
                        <h5 style={{ marginBottom: '1rem' }}>{service.name}</h5>
                        <p style={{ margin: '0.5rem 0' }}>Price: ${service.price}</p>
                        <p style={{ margin: '0.5rem 0' }}>Size: {service.size}</p>
                        <p style={{ margin: '0.5rem 0' }}>Category: {service.category}</p>
                        <p style={{ margin: '0.5rem 0' }}>Description: {service.description}</p>

                    </div>
                </div>
            ) : (
                <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#d1ecf1', color: '#0c5460', borderRadius: '0.25rem' }}>
                    No service details available.
                </div>
            )}
        </div>
    );
}

export default RunningDetails;
