import React from 'react';
import image  from '../assests/images/about1.jpg';
import Footer from './Footer';

function About() {
    
    const imageStyle = {
       height: '200px', width:'80vw' , margin: '20px 200px 0px 140px'
    };

    return (
        <div>
           <img src={image} alt='not found image'  style={imageStyle} />
           <h3 style={{margin:'20px 200px 0px 140px'}}>Mission</h3>
           <p style={{margin:'4px 200px 0px 200px', fontSize:'20px',fontWeight:'normal'}}>To provide a high quality footwear that suit the athletes style and to be one of the leading sports footwear apparel in the country.</p>
           <h3 style={{margin:'20px 200px 0px 140px'}}>Vision</h3>
           <p style={{margin:'4px 200px 0px 200px', fontSize:'20px',fontWeight:'normal'}}>Online Shoe Store, the company that inspire, motivate, and give determination to the sports enthusiast.</p>



       
        </div>
    );
}

export default About;
