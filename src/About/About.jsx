import React from 'react';

function About(props) {
    return (
        <div style={{marginTop:"10%"}}>
        <div style={{width:"50%", margin:"auto", display:"block", padding:"20px", boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <h1 style={{textAlign:"center", color:"red", fontSize:"30px"}}>Ambula</h1>
        <p style={{textAlign:"left", alignItems:"end", fontSize:"20px"}}>

            At Ambula, they are deeply committed to the belief that every person deserves access to high-quality healthcare services.
             We believe in a democratic approach to health, and through the use of technology, 
             we strive to make emergency and trauma care assistance more transparent, easily accessible, and user-friendly for all individuals in India.
            By bridging the communication gap in healthcare delivery, 
            we hope to empower individuals to take control of their health and well-being.
            </p>
            </div>
        </div>
    );
}

export default About;