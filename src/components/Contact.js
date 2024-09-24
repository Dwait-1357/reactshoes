import React, { useState } from 'react';
import axios from 'axios';


const Contact = () => {
  const [formData, setFormData] = useState({
    fname: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const[fn,setFn] = useState(true);  
  const[em,setEm] = useState(true);
  const[sub,setSub] = useState(true);
  const[mes,setMes] = useState(true);  

  const handleSubmit = async(e) => {
    e.preventDefault();

    let payload = {
        'fname':formData.fname,      
        'email':formData.email,
        'subject':formData.subject,
        'message':formData.message,
      

    }


    try {
        axios.post('http://127.0.0.1:8000/api/contact',formData).then((r) => {
          
             localStorage.setItem('token',r.data.token);
           //  navigate("/login");
             alert('admin contect successfully');
             console.log('reg',r);
        })
        .catch((e) => {
             console.log(e);
        });
    }catch (error) {
        alert('something went wrong');
        console.error('Unexpected Error:', error);
    }
     
   
  };

  return (
    <>
    
    <div className="my-5 px-4">
      <h2 className="fw-bold h-font text-center">Contact Us</h2>
      <div className="h-line bg-dark" style={{ height: '2px', width: '50px', margin: '0 auto', marginBottom: '15px' }}></div>
      <p className="text-center mt-3">
        You can contact here with us.
      </p>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 mb-5 px-4">
            <div className="bg-white rounded shadow p-4">
              <iframe
                className="w-100 rounded mb-4"
                height="320px"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d119505.38261287501!2d72.92999300000001!3d20.606704!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0e8208249a6cf:0xf6b629fd4c95a813!2sValsad, Gujarat!5e0!3m2!1sen!2sin!4v1702296565164!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
              <h5>Address</h5>
              <a href="https://www.google.com/maps?q=123+Main+Street,+Valsad,+Gujarat" target="_blank" rel="noopener noreferrer" className="d-inline-block text-decoration-none text-dark mb-2">
                <i className="bi bi-geo-alt-fill"></i> Jeshpor, Valsad, Gujarat
              </a>
              <h5 className="mt-4">Call us</h5>
              <a href="tel:+918866439559" className="d-inline-block mb-2 text-decoration-none text-dark">
                <i className="bi bi-telephone-fill"></i> +91 8866439559
              </a>
              <br />
              <a href="tel:+918866439559" className="d-inline-block text-decoration-none text-dark">
                <i className="bi bi-telephone-fill"></i> +91 8866439559
              </a>
              <h5 className="mt-4">Email</h5>
              <a href="mailto:jay.patel550055@gmail.com" className="d-inline-block text-decoration-none text-dark">
                <i className="bi bi-envelope-fill"></i> jay.patel550055@gmail.com
              </a>
              <h5 className="mt-4">Follow Us</h5>
              <a href="https://www.twitter.com" className="d-inline-block text-dark fs-5 me-2" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter me-1"></i>
              </a>
              <a href="https://www.facebook.com" className="d-inline-block text-dark fs-5 me-2" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook me-1"></i>
              </a>
              <a href="https://www.instagram.com" className="d-inline-block text-dark fs-5" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram me-1"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 px-4">
            <div className="bg-white rounded shadow p-4">
              <form onSubmit={handleSubmit}>
                <h5>Send a message</h5>
                <div className="mt-3">
                  <label className="form-label" style={{ fontWeight: 500 }}>Name</label>
                  <input
                    name="name"
                    required
                    type="text"
                    className="form-control shadow-none"
                    value={formData.fn}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-3">
                  <label className="form-label" style={{ fontWeight: 500 }}>Email</label>
                  <input
                    name="email"
                    required
                    type="email"
                    className="form-control shadow-none"
                    value={formData.em}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-3">
                  <label className="form-label" style={{ fontWeight: 500 }}>Subject</label>
                  <input
                    name="subject"
                    required
                    type="text"
                    className="form-control shadow-none"
                    value={formData.sub}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-3">
                  <label className="form-label" style={{ fontWeight: 500 }}>Messages</label>
                  <textarea
                    name="message"
                    required
                    className="form-control shadow-none"
                    rows="5"
                    style={{ resize: 'none' }}
                    value={formData.mes}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn text-white mt-3" style={{ backgroundColor: '#007bff', border: 'none' }}>Send</button>

              </form>
              {submitted && <p className="text-success mt-3">Your message has been sent successfully!</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Contact;
