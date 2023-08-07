import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetailsPage from "./pages/Components/Product";
function App() {
  return (
    <Routes>
      <Route path="/app/" element={<Home />} />
      <Route path="/app/product" element={<ProductDetailsPage />} />
    </Routes>
  );
}

export default App;
