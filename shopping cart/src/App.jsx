import { useState } from 'react'
import { Footer } from './components/Footer.jsx'
import { Header } from './components/Header.jsx'
import { Products } from './components/Products.jsx'
import { IS_DEVELOPMENT } from './config.js'
import { useFilters } from './hooks/useFilters.jsx'
import { products as initialProducts } from './mocks/products.json'


function App() {
  const [products] = useState(initialProducts)
  const { filterProducts,  filters} = useFilters ()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      { IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  )
}

export default App
