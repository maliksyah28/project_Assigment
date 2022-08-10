import React from "react";
import { Box, Image, Badge, Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./style.css";

// tampilan awal pokemon
function Card({ pokemon }) {
  //   console.log(pokemonData);
  return (
    <div className="card product-card">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.sprites.front_default}
      />
      <div className="mt-2">
        <div>
          <div className="font">
            <h3>{pokemon.name}</h3>
          </div>
          <span className="text-muted">
            {pokemon.types.map((type) => {
              return <Flex direction="row">type : {type.type.name}</Flex>;
            })}
          </span>
        </div>
        <div className="d-flex flex-row justify-content-end">
          <button
            className="mt-2 w-100"
            outline
            color="primary"
            tag={Link}
            to={`/pokemon/${pokemon.id}`}
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

// <div className="Card">
// <div className="Card__img">
// <img src={pokemon.sprites.front_default} alt="pkemon" />
// </div>
// <div className="Card__Name">{pokemon.name}</div>
// <div className="Card__type">
// {pokemon.types.map((type) => {
//   return <div className="Card__type">{type.type.name}</div>;
// })}
// </div>
// </div>

//with chakra UI

{
  /* <Box
      //   bgColor={"grey"}
      rounded="full"
      border={"1px"}
      borderColor="black"
      maxW="xs"
      borderWidth="5px"
      borderRadius="xs"
      overflow="hidden"
      margin={10}
    >
      <Image
        src={pokemon.sprites.front_default}
        alt={pokemon.sprites.front_default}
      />

      <Box
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        noOfLines={1}
      >
        {pokemon.name}
      </Box>
      <Box p="5">
        <Box display="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="1"
          >
            {pokemon.types.map((type) => {
              return <Flex direction="row">type : {type.type.name}</Flex>;
            })}
          </Box>
        </Box>
      </Box>
    </Box> */
}
