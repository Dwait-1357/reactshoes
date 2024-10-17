import './App.css';
import './navbar.css';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Contact from './components/Contact';
import Services from './components/Services';
import Football from './components/Football';
import Running from './components/Running';
import RunningDetails from './components/RunningDetails';
import Feture from './components/Feture';
import Order from './components/Order';
import image from './assests/images/logo.jpg';
import { useCartContext } from './ContextApi/cart_context';
import Feautersingleproduct from './components/Featuresingleproduct';
import Cart from './components/Cart';
import Product from './components/Product';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  const { clearCart } = useCartContext();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const token = localStorage.getItem('token');
  const userData = JSON.parse(localStorage.getItem('userData'));

  useEffect(() => {
    if (token && userData) {
      setIsLoggedIn(true);
      setUserName(userData.fname || userData.email.split('@')[0]);
    }
  }, [token, userData]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    clearCart();
    setIsLoggedIn(false);
  };

  const imageStyle = {
    height: '50px',
    width: '50px',
    marginLeft: '20px',
    borderRadius: '50%',
  };

  // Inline styles for the main layout
  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };

  const mainContentStyle = {
    flex: '1', // Allow this section to grow
  };

  return (
    <BrowserRouter>
      <div style={appStyle} className="App">
        <nav className="navbar">
          <div>
            <img src={image} alt='not found image' style={imageStyle} />
          </div>
          <ul className="navbar-links">
            <li>
              <div className="navbar-brand">
                {isLoggedIn && (
                  <span className="navbar-text">
                    Welcome, {userName}!
                  </span>
                )}
              </div>
            </li>
            <li>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            {isLoggedIn ? (
              <>
                <li>
                  <Link className="nav-link" to="/product">Products</Link>
                </li>
                <li>
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li>
                  <Link className="nav-link" to="/cart">Cart</Link>
                </li>
                <li>
                  <Link className="nav-link" to="/login" onClick={handleLogout}>Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li>
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        
        <div style={mainContentStyle} className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/services" element={<Services />} />
            <Route path="/running/:id" element={<RunningDetails />} />
            <Route path="/feture" element={<Feture />} />
            <Route path="/feture/:id" element={<Feautersingleproduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<Product />} />
            <Route path='/order' element={<Order />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;




// import './App.css';
// import './navbar.css';
// import About from './components/About';
// import Home from './components/Home';
// import Login from './components/Login';
// import Register from './components/Register';
// import Contact from './components/Contact';
// import Services from './components/Services';
// import Football from './components/Football';
// import Running from './components/Running';
// import RunningDetails from './components/RunningDetails';
// import Feture from './components/Feture';
// import Order from './components/Order';
// import image  from './assests/images/add.jpg';

// import { useCartContext } from './ContextApi/cart_context';
// import Feautersingleproduct from './components/Featuresingleproduct';
// import Cart from './components/Cart';
// import Product from './components/Product';
// import Footer from './components/Footer';
// import { useEffect, useState } from 'react';
// import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

// function App() {
//   const { clearCart } = useCartContext();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState('');

//   const token = localStorage.getItem('token');
//   const userData = JSON.parse(localStorage.getItem('userData'));

//   useEffect(() => {
//     if (token && userData) {
//       setIsLoggedIn(true);
//       setUserName(userData.fname || userData.email.split('@')[0]);
//     }
//   }, [token, userData]);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userData');
//     clearCart();
//     setIsLoggedIn(false);
//   };
//   const imageStyle = {
//     height: '50px', // Set height
//     width: '50px',  // Set width equal to height for a circle
//     marginLeft: '20px',
//     borderRadius: '50%', 
    
// };


//   return (
//     <BrowserRouter>
//       <div className="App">
//         <nav className="navbar">
//           <div>
//           <img src={image} alt='not found image' style={imageStyle}/>
//           </div>
         
        
//           <ul className="navbar-links">
//             <li>
//             <div className="navbar-brand">
//             {isLoggedIn && (
//               <span className="navbar-text">
//                 Welcome, {userName}!
//               </span>
//             )}
//           </div>
//             </li>
//             <li>
//               <Link className="nav-link" to="/">Home</Link>
//             </li>
//             {isLoggedIn ? (
//               <>
//                 <li>
//                   <Link className="nav-link" to="/product">Products</Link>
//                 </li>
//                 <li>
//                   <Link className="nav-link" to="/about">About</Link>
//                 </li>
//                 <li>
//                   <Link className="nav-link" to="/contact">Contact</Link>
//                 </li>
//                 <li>
//                   <Link className="nav-link" to="/cart">Cart</Link>
//                 </li>
//                 <li>
//                   <Link className="nav-link" to="/login" onClick={handleLogout}>Logout</Link>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li>
//                   <Link className="nav-link" to="/login">Login</Link>
//                 </li>
//                 <li>
//                   <Link className="nav-link" to="/register">Register</Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </nav>
//       </div>
//     <div className="main-content">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/running/:id" element={<RunningDetails />} />
//         <Route path="/feture" element={<Feture />} />
//         <Route path="/feture/:id" element={<Feautersingleproduct />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/product" element={<Product />} />
//         <Route path='/order' element={<Order/>}/>
//       </Routes>
//       <Footer />
//      </div>
//     </BrowserRouter>
//   );
// }

// export default App;





































































































































































































































































































































































































































































































// import './App.css';
// import './navbar.css';
// import About from './components/About';
// import Home from './components/Home';
// import Login from './components/Login';
// import Register from './components/Register';
// import Contact from './components/Contact';
// import Services from './components/Services';
// import Football from './components/Football';
// import Running from './components/Running';
// import RunningDetails  from './components/RunningDetails';
// import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
// import Feture from './components/Feture';
// import { BioProvider } from './ContextApi/productcontext';
// import Feautersingleproduct from './components/Featuresingleproduct';
// import Cart from './components/Cart';
// import Product from './components/Product';
// import { useCartContext } from './ContextApi/cart_context';
// import { FiShoppingCart } from 'react-icons/fi';

// import { Component } from 'react';
// import Footer from './components/Footer';

// function App() {

//   const {total_item} = useCartContext();
  

//   return (
   
//     //  <Feture/>
//    <BrowserRouter>   
//   <div className="App">
//         <nav className="navbar">
//           <div className="navbar-brand">
//             <a href="/">MyBrand</a>
//           </div>
//           <ul className="navbar-links">
//             <li>
//               <Link className="nav-link" to="/">Home</Link>
//             </li>

//             <li>
//               {/* <Link className="nav-link" to="/services">Products</Link> */}
//               <Link className="nav-link" to="/product">product</Link>            
//             </li>

//             <li>
//               <Link className="nav-link" to="/about">About</Link>
//             </li>
           
//             <li>
//               <Link className="nav-link" to="/contact">Contact</Link>
//             </li>
//             <li>
//               <Link className="nav-link" to="/login">Login</Link>
//             </li>
//             <li>
//               <Link className="nav-link" to="/register">Register</Link>
//             </li>
//             <li>
//               {/* <Link className="nav-link" to="/feture">feture</Link> */}
//             </li>
//             <li>
//               {/* <Link className="nav-link" to="/product">product</Link> */}
//             </li>
//             <li>
           
//             <NavLink to="/cart" className="navbar-link cart-trolley--link">
//            <FiShoppingCart className='cart-trolley'/>
//            <span className='cart-total-item'>{total_item}</span>
        
//          </NavLink>


//             </li>
//           </ul>
//         </nav>
       
//       </div>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/services' element={<Services />}>
//           <Route path='running' element={<Running />} />
//           <Route path='football' element={<Football />} />
//         </Route>
//         <Route path='/running/:id' element={<RunningDetails/>} />
//         {/* <Route path='/services/running/:id' element={<RunningDetails/>} /> */}
//        <Route path='/services/running/:id' element={<RunningDetails />} />
        


//         <Route path='/contact' element={<Contact />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/register' element={<Register />} />
//         <Route path='/feture' element={<Feture/>}/>
//         <Route path='/feture/:id' element={<Feautersingleproduct/>} />
//         <Route path='/cart' element={<Cart/>}/>
//         <Route path='/product' element={<Product/>}/>
        

//       </Routes>
//       <Footer/>
//     </BrowserRouter>
//   );
// }
 


// export default App;
