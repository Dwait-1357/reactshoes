import React, { useState } from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ setIsLoggedIn, setUserName }) { // Add props
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChanges = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const payload = {
            email: formData.email,
            password: formData.password,
        };

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', payload);
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem("userId",response.data.user.id);
                localStorage.setItem('userData', JSON.stringify({
                    email: formData.email,
                    fname: response.data.user.fname, 
                    id: response.data.user.id,
                }));                       
                // Update the parent component state
                setIsLoggedIn(true);
                setUserName(response.data.user.fname || formData.email.split('@')[0]);
                
                alert(response.data.message);
                navigate("/");
            } else {
                alert(response.data.error);
            }
        } catch (error) {
            alert('Wrong email or password');
            console.error('Login Error:', error);
        }
    };

    return (
        <div className="container login-form">
            <div className="row justify-content-center mt-2">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <h2 className="text-center mb-4">Login</h2>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        onChange={handleChanges}
                                        id="username"
                                        placeholder="Username"
                                        required
                                    />
                                    <label htmlFor="username">Username</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        onChange={handleChanges}
                                        id="password"
                                        placeholder="Password"
                                        required
                                    />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;


































































































































































































































































































































































































































































































































// import React,{useState} from 'react';
// import axios from 'axios';
// import {useNavigate}  from 'react-router-dom';
// import jwt_decode from "jwt-decode";

// function Login()
// {
//     const navigate = useNavigate(); 
//     const[formdata,setFormData] = useState({       
//         'email':'',        
//         'password':'',       

//      });
//      const handleChanges = (event) => {
//         const {name,value} = event.target;
//         setFormData({
//          ...formdata,
//            [name]:value
//         });
//      };  
//         const handleSubmit = (event) => {
//             event.preventDefault();
//             const payload = {
//                  'name':formdata.name,
//                 'password': formdata.password,
//                 'email': formdata.email
//             };
          
           
//                 axios.post('http://127.0.0.1:8000/api/login', payload)
//                     .then((response) => {
//                       if(response.status === 200){
//                         localStorage.setItem('token', response.data.token);
//                         localStorage.setItem('userData', JSON.stringify({ email: formdata.email, fname:formdata.fname,id: response.data.user.id }));
//                         navigate("/");
//                         alert(response.data.message);
//                       } else {
//                         alert(response.data.error)
//                       }
                        
                       
//                     })
//                     .catch((error) => {
//                         alert('wrong email or password');
//                         console.error('login Error:', error);
//                     });
            
          
//             };
    

      
//     return (
//         <div className="container login-form">
//         <div className="row justify-content-center mt-2">
//         <div className="col-md-6">
//             <div className="card shadow">
//                 <div className="card-body">
//     <form  onSubmit={handleSubmit}>
//         <h2 className="text-center mb-4">Login</h2>
//         <div className="form-floating mb-3">
//             <input type="text" className="form-control" name="email" onChange={handleChanges}  id="username" placeholder="Username" />
         
//             <label for="username">Username</label>
//         </div>
//         <div className="form-floating mb-3">
//             <input type="password" className="form-control" name="password" onChange={handleChanges}   id="password" placeholder="Password" />
//             <label for="password">Password</label>
//         </div>
//         <div className="form-floating mb-3">
//         <button className="btn btn-primary">Login</button>
//         </div>
//     </form>
// </div>
// </div>
// </div>
// </div>
// </div>
//     )
// }

// export  default Login;