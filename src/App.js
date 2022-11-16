import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import Checkout from "./components/checkoutPage/checkout";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route  path="/" element={<HomePage />} />
            <Route  path="/checkout" element={<Checkout />} />
        </Routes>
     </div>
  );
}

export default App; 