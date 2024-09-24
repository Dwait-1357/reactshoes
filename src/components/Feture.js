
import { useBio, BioProvider } from '../ContextApi/productcontext';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
//import Feautersingleproduct from './components/Featuresingleproduct';

function Feture()
{
    const {isLoading, category} = useBio();
    const image_path = 'http://127.0.0.1:8000/uploads/products/';
   // const footballItems = category.filter(item => item.category === "football");


    if(isLoading)
    {
        return <div>loading...</div>
    }

    return(        
           
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
}

export default Feture;