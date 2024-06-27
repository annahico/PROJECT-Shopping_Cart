import { Products } from "./components/Products";
import productsData from "./mocks/products.json";

function App() {
  return (
    <Products products={productsData.products} />
  );
}

export default App;
