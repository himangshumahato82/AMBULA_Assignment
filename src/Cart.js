import "./App.css";

import NavBar from "./navbar/navbar";

import React, { useState } from "react";
import { LoginContext } from "./ProductSection/Context/Context";

import { useEffect } from "react";
import CartR from "./CartRoute/CartR";

function Cart() {
  const [loginInfo, setloginInfo] = useState(
    JSON.parse(sessionStorage.getItem("loggedIn"))
  );
  let [inputLoad, setinputLoad] = React.useState(false);
  useEffect(() => {
    console.log(inputLoad);
  }, );
  return (
    <div className="App">
      <LoginContext.Provider value={{ loginInfo, setloginInfo, fn: setinputLoad, valu:inputLoad }}>
        <NavBar fn={setinputLoad} />
        <CartR/>
      </LoginContext.Provider>
    </div>
  );
}

export default Cart;
