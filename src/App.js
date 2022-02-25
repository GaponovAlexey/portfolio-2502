import * as React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home"
import Services from "./pages/Services";
import Portofolio from "./pages/Portofolio";
import About from "./pages/About";
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="portofolio" element={<Portofolio />} />
        <Route path="about-us" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
