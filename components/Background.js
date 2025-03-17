'use client'
import React, { useEffect } from 'react';


function Background() {
    useEffect(() => {
        const gradient = document.querySelector('body');
        let angle = 0; 
        
        const animateBackground = () => {
            angle += 0.05;
            gradient.style.background = `linear-gradient(${angle}deg, #ff7e5f, #feb47b)`;
            requestAnimationFrame(animateBackground)
        };
        animateBackground();
    }, []);

  return null;
}

export default Background