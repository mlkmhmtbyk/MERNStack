import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage.jsx";
import Home from "./pages/HomePage.jsx";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Box minH="100vh">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
