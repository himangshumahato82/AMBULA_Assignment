import "./NavBar.css";
import { Link } from "react-router-dom";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFolder } from "@fortawesome/free-regular-svg-icons";
import React, {useEffect } from "react";

function NavBar() {
  const [cartData, setCartData] = React.useState(0);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("cartdata")) || [];
    setCartData(storedData.length);
  }, []);

  
console.log(cartData)
  

  
 
 

 

  return (
    <div>
    <div style={{height:"80px",backgroundColor:"teal",display:"flex",alignItems:"center", justifyContent:"space-evenly"}}>
    <Link to={"/intro"}><h1>Home</h1></Link>
    <Link to={"/about"}><h1>About</h1></Link>
     <Link to={"/todo"}><h1>ToDoList</h1></Link>
     <Link to={"/"}><h1>CartPage</h1></Link>
     <div>
                <Link to="/cart">
                  <div>
                    <h1 className="icon_heart">
                    <p>VIEW CART ({cartData})</p>
                      <FontAwesomeIcon icon={faFolder} />
                    </h1>
                  </div>
                </Link>
              </div>
     <Link to={"/contact"}><h1>Contact</h1></Link>
     
     </div>
      <div id="main_navbar">
        <div id="navbar_left_box">
       
        </div>
        <div id="navbar_right_box">
        
         
         
        </div>
      </div>
    </div>
  );
}

export default NavBar;
