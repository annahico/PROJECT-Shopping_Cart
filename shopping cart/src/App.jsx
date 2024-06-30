import { Footer } from './components/Footer.jsx'
import { Header } from './components/Header.jsx'
import { Products } from './components/Products.jsx'
import { IS_DEVELOPMENT } from './config.js'
import { useFilters } from './hooks/useFilters.js'
import { products as initialProducts } from './mocks/products.json'

function useFilters () {

  const {filters, setFilters} = useContext(FiltersContext)


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
      { IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  )
}

export default App
