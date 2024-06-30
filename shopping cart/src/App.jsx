import { useState } from "react";
import { Header } from './components/Header.jsx';
import { Products } from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";

function useFilters () {
// State for products and filters
  const [filters, setFilters] = useState({
    category: 'all', // Filter by category
    minPrice: 0, // Filter by minimum price
  })

  // Function to filter products based on selected filters
  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price > filters.minPrice && 
        (
          filters.category === 'all' || 
          product.category === filters.category
        )
      )
    })
  }

  return { filterProducts, setFilters} 
}


function App() {
  const [products] = useState(initialProducts)
  const { filterProducts, setFilters} = useFilters ()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters}/>
      <Products products={filteredProducts} />
      <Footer></Footer>
    </>
  )
}

export default App;
