import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBio } from '../ContextApi/productcontext';
import PageNavigation from "./PageNavigation";
import AddToCart from "./AddToCart";
import './Featuresingleproduct.css'; // Import the CSS file

const Feautersingleproduct = () => {
    const { getSingleProduct, isSingleLoading, singleProduct } = useBio();
    const { id } = useParams(); 
    const { name, price, size, stock, image, brand, category, description, star } = singleProduct || {};
    
    useEffect(() => {
        getSingleProduct(`http://127.0.0.1:8000/api/services/${id}`); 
    }, []);  

    if (isSingleLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <PageNavigation title={name} />
            <div className="product-details">
                <div className="product-image">
                    <img src={`http://127.0.0.1:8000/uploads/products/${image}`} alt={name} />
                </div>
                <div className="product-info">
                    <h2>{name}</h2>
                    <p>Price: ${price}</p>
                    <p>Size: {size}</p>
                    {/* <p>Stock: {stock}</p> */}
                    <p>Brand: {brand}</p>
                    <p>Category: {category}</p>
                    <p>Description: {description}</p>
                    <p>Color: {star}</p>
                    {stock > 0 && <AddToCart product={singleProduct}/>}
                </div>
            </div> 
        </>
    );
}

export default Feautersingleproduct;
