import { ChakraProvider, Flex } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";
import Home from "../src/pages/Home";
import DetailProduct from "./pages/Detail/[id]";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Detail/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// //  <BrowserRouter>
// <Routes>
// <Route path="/" element={<Home />} />
// <Route path="/detail" element={<DetailPokemon />} />
// </Routes>
// </BrowserRouter>
