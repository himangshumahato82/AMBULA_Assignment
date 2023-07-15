import React from 'react';

function Intro(props) {
    return (
        <div style={{marginTop:"10%"}}>
            <div style={{width:"50%", margin:"auto", display:"block", padding:"20px", boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                <h1 style={{textAlign:"center", color:"red", fontSize:"30px"}}>Introduction</h1>
                <p style={{textAlign:"left", alignItems:"end", fontSize:"20px"}}>
                    I am Himangshu Mahato from West Bengal. I was born and raised in Purulia,
                    West Bengal. I completed my B.Tech in Mechanical Engineering from Asansol Engineering College in 2022.
                    During my engineering studies, I developed a growing interest in coding, which led me to pursue a career in the field of computer science.
                    I joined Masai School, where I enrolled in a 30-week full stack web development course, allowing me to enhance my coding skills.
                    At Masai School, I gained hands-on experience in both frontend and backend technologies.
                    In my free time, I enjoy playing cricket and football.
                </p>
           </div>
        </div>
    );
}

export default Intro;
