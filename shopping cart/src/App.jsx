import { useState } from "react";
import { Header } from './components/Header.jsx';
import { Products } from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";



function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all', //producto
    minPrice: 0, //dinero
  })

  //ESTO ES PARA JUNIORS: FILTRAR PARA LAS ENTREVISTAS

  const filterProducts = (products) => {
    return products.filter(product =>{
      return (
        product.price > filters.minPrice && 
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)
  
  return (
    <>
    <Header />
    <Products products={filteredProducts} />
    </>
    
  );
}

export default App;
