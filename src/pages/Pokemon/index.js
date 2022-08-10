import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { Box, Image, Badge, Flex, Button } from "@chakra-ui/react";

import resGetDP from "../../service/resGetDP";

function Detail() {
  const [tampilanPokemon, setTampilanPokemon] = useState("");
  const params = useParams();

  const initUrl = `https://pokeapi.co/api/v2/pokemon/${params.id}/`;

  useEffect(() => {
    async function detailPokemon() {
      let dataDP = await resGetDP(initUrl);
      console.log(dataDP);
      // await loadPokemon(dataDP.results);
      setTampilanPokemon(dataDP);
    }
    detailPokemon();
  }, []);
  console.log(tampilanPokemon);
  return (
    <div>Detail</div>
    // <div className="container">
    //   <div className="row mt-3">
    //     <div className="col-6">
    //       <img
    //         style={{ width: "100%" }}
    //         src={tampilanPokemon.sprites.front_default}
    //         alt={tampilanPokemon.sprites.front_default}
    //       />
    //     </div>
    //     <div className="col-6 d-flex flex-column justify-content-center">
    //       <h4>{tampilanPokemon.name}</h4>
    //       <p>
    //         {tampilanPokemon.types.map((type) => {
    //           return <Flex direction="row">type : {type.type.name}</Flex>;
    //         })}
    //       </p>
    //       <button
    //         // onClick={addToCart}
    //         className="btn btn-success mt-3"
    //       >
    //         Add to cart
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Detail;
