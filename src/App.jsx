import React from "react"
import { BrowserRouter , Route , Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Error from "./pages/Error"
import Gallery from "./pages/Gallery"
import Footer from "./components/Footer"



function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<Error />} />
        <Route path="/gallery/:id" element={<Gallery />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App