//import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Layout from "./Components/Module Components/Layout";
import Blinds from "./Pages/Blinds/Blinds";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/blinds" element={<Blinds />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
