import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import ECommerce from "./pages/ecommerce";





function App() {
  return (
    <div>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          {/* <Route index element={<Home />} /> */}
          
          <Route path="ecommerce" element={<ECommerce />} />
        
        
      </Routes>
    </BrowserRouter>
   
  
    </div>
  );
}

export default App;
