// import React from "react";
// import { FaPlus, FaMinus } from 'react-icons/fa';
// import { NavLink } from "react-router-dom";


// const CartAmountToggle = ({amount,setDecrease, setIncrease}) => {
//     return <>
    
//             <button onClick={() => setDecrease()}>  <FaMinus /> </button>
//             <span style={{fontSize:'20px'}}>{amount}</span>
//             <button onClick={() => setIncrease()}> <FaPlus /></button>

//             <NavLink to='/cart'>
//             <button  className="btn btn-primary">ADD TO CART</button>

//             </NavLink>

//            </>
// }

// export default CartAmountToggle;



import React from "react";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
    const buttonStyle = {
        padding: '5px 10px',
        cursor: 'pointer',
        border: '1px solid #ddd',
        borderRadius: '4px',
        backgroundColor: '#f0f0f0'
    };

    const amountStyle = {
        margin: '0 10px'
    };

    return (
        <div>
            <button style={buttonStyle} onClick={setDecrease}>-</button>
            <span style={amountStyle}>{amount}</span>
            <button style={buttonStyle} onClick={setIncrease}>+</button>
        </div>
    );
}

export default CartAmountToggle;
