import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Quizapp from "./pages/quizapp";
import Calculator from "./pages/calculator";
import ECommerce from "./pages/ecommerce";
import Todolist from "./pages/todolist";




function App() {
  return (
    <div>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          {/* <Route index element={<Home />} /> */}
          <Route path="quizapp" element={<Quizapp />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="ecommerce" element={<ECommerce />} />
          <Route path="todolist" element={<Todolist />} />
        
      </Routes>
    </BrowserRouter>
   
  
    </div>
  );
}

export default App;
