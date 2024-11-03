import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Service from "./pages/Service"
import Portfolio from "./pages/Porfolio"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/service" element={<Service />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App