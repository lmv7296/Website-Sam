import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/Footer/Footer.jsx";
import Marktkaarten from "./Components/Markten/Marktkaarten";
import Checkout from "./Components/Checkout/Checkout";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Giftandmorebysam/Contact" element={<Contact />} />
          <Route path="/Giftandmorebysam/Markten" element={<Marktkaarten />} />
          <Route path="/GiftandmorebySam/winkelmandje" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
