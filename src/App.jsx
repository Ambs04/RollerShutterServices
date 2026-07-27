//import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Layout from "./Components/Module Components/Layout";
import Services from "./Pages/Services/Services";
import Blinds from "./Pages/Blinds/Blinds";
import Gallery from "./Pages/Gallery/Gallery";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blinds" element={<Blinds />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
