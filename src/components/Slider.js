import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'; // Import the default styles
//import 'react-awesome-slider/src/styles/themes/cube-animation.scss'; // Import cube animation styles

const AutoSlider = () => {
    return (
        <AwesomeSlider
            animation="cubeAnimation" // Use cube animation
            className="slider-test"
            interval={3000} // Auto-slide every 3 seconds
        >
            <div data-src="/images/slider/banner1.jpg" />
            <div data-src="/images/slider/banner2.jpg" />
            <div data-src="/images/slider/banner3.jpg" />
        </AwesomeSlider>
    );
}

export default AutoSlider;
