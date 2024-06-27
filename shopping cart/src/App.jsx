import { useState } from "react";
import { Products } from "./components/Products";
import { products as initialProducts } from "./mocks/products.jsx";

function App() {
  const [products] = useState(initialProducts)
  return (
    <Products products={products} />
  );
}

export default App;
