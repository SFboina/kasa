import React from "react"
import { BrowserRouter , Route , Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Error from "./pages/Error"
import Gallery from "./pages/Gallery"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"


function App () {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<Error />} />
          <Route path="/gallery/:id" element={<Gallery />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App