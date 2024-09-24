import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate}  from 'react-router-dom';


function Register()
{

    const navigate = useNavigate();
    

     const[formdata,setFormData] = useState({
        'fname':'',
        'lname':'',
        'email':'',
        'mobile':'',
        'password':'',
        'confirmpassword':''

     });

     const handleChanges = (event) => {
           const {name,value} = event.target;
           setFormData({
            ...formdata,
              [name]:value
           });

           
     }
 
     const[fn,setFn] = useState(true);
     const[ln,setLn] = useState(true);
     const[em,setEm] = useState(true);
     const[mo,setMo] = useState(true);
     const[password,setPassword] = useState(true);  

    
     const handleSubmit = async(event) => {
        event.preventDefault();
        if(formdata.password !== formdata.confirmpassword )
        {
            setPassword(false);
            return;
        }     
        

        localStorage.setItem('userData',JSON.stringify(formdata));
        const userdata=   localStorage.getItem('userData');
      

        let payload = {
            'fname':formdata.fname,
            'lname':formdata.lname,
            'email':formdata.email,
            'mobile':formdata.mobile,
            'password':formdata.password,
            'confirmpassword':formdata.confirmpassword

        }


        try {
            axios.post('http://127.0.0.1:8000/api/register',formdata).then((r) => {
              
                 localStorage.setItem('token',r.data.token);             
                 navigate("/login");
                 alert('user register successfully');
                 
            })
            .catch((e) => {
                 console.log(e);
            });
        }catch (error) {
            alert('something went wrong');
            console.error('Unexpected Error:', error);
        }
        
    
    }
       

     return (
        <div>
             <div className="container register-form">
            <div className="row justify-content-center mt-2">
            <div className="col-md-6">
                <div className="card shadow">
                    <div className="card-body">
            <form onSubmit={handleSubmit}>
                <h2 className="text-center mb-4">Register</h2>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control"  onChange={handleChanges}  name="fname"  id="firstname" placeholder="First Name" />
                    {!fn && <p style={{color:'red'}}>Required first name</p>}

                    <label for="firstname">First Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" onChange={handleChanges}   name="lname" id="lastname" placeholder="Last Name" />
                   {!ln && <p style={{color:'red'}}>last name is required</p>}
                    <label for="lastname">Last Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" onChange={handleChanges}   name="email"  id="email" placeholder="name@example.com" />
                 
                    <label for="email">Email</label>
                    {!em && <p style={{color:'red'}}>email is required</p>}

                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control"  onChange={handleChanges} name="mobile"  id="mobile" placeholder="Mobile" />
                    <label for="mobile">Mobile</label>
                    {!mo && <p style={{color:'red'}}>mobile number is required</p>}

                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" onChange={handleChanges}   name="password"  id="password" placeholder="Password" />
                    <label for="password">Password</label>
                  

                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" name="confirmpassword" onChange={handleChanges}  id="confirm_password" placeholder="Confrim Password" />
                    <label for="confirm_password">Confrim Password</label>
                    {!password && <p style={{color:'red'}}>last name is required</p>}
                </div>
                <center><button className="btn btn-primary">Register</button></center>
                
            </form>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export  default Register;