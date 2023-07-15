import React, { useEffect, useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import lodergif from "./loder.gif";
import ProdtctFilter from "./ProdtctFilter";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import { myContext } from "./Context/Context";
import { LoginContext } from "./Context/Context";
import { useContext } from "react";

const ProductAll = () => {
  let { category } = useParams();
  console.log(category);

  const [loader, setLoader] = useState(false);
  const [val, setVal] = useState([]); // Set initial state as an empty array

  const { valu } = useContext(LoginContext);

  useEffect(() => {
    fetchdata();
  }, [valu]);

  console.log(val);

  const fetchdata = async () => {
    let res;
    if (category) {
      res = await fetch(
        `https://furation-backend-production-0abe.up.railway.app/data/?department=${category}`
      );
    } else {
      res = await fetch(
        `https://furation-backend-production-0abe.up.railway.app/data`
      );
    }

    const data = await res.json();
    console.log(data);
    setVal(data);
  };

  useEffect(() => {
    setLoader(true);

    setTimeout(() => {
      setLoader(false);
    }, );
  }, []);

  return (
    <myContext.Provider value={{ stat: val, fn: setVal, name: category }}>
      <div style={{ backgroundColor: "#ECECEC" }}>
        <Box width={"90%"} margin="auto" pt={"25px"}>
          {loader && (
            <Image
              position={"fixed"}
              top={"30%"}
              left="30%"
              margin="auto"
              width={"50%"}
              src={lodergif}
            />
          )}
          <Box
            width="100%"
            display="grid"
            backgroundColor={"#ECECEC"}
            gridTemplateColumns="21% 75%"
            gap={"3%"}
          >
            <Box style={{ borderRadius: "10px", padding: "8px" }}>
              <ProdtctFilter />
            </Box>

            <Box
              display="grid"
              gridTemplateColumns="repeat(4,1fr)"
              rowGap={"15px"}
              columnGap={"8px"}
            >
              {val.map((ele, i) => {
                return <ProductCard key={i} data={ele} />;
              })}
            </Box>
          </Box>
        </Box>
      </div>
    </myContext.Provider>
  );
};

export default ProductAll;
