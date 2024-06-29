import { useState } from 'react'
import './Filters.css'

export function Filters () {
    const [minPrice, setMinPrice] = useState(0)



const handleChangeMinPrice = (event) => {
    //algo huele MAL porque hay DOS fuentes de la verdad y hay que arreglarlo
    setMinPrice(event.target.value)
    onChange(prevState => ({
        ...prevState,
        minPrice: event.target.value
    }))
}


const handleChangeCategory = (event) => {
    //algo huele MAL
//estamos pasando la función de actualizar estado
    //nativa de React a un componente hijo
    onChange(prevState => ({
        ...prevState,
        category: event.target.value
    }))
}

return (
        <section className="filters">

            <div>
                <label htmlFor="price">Price</label>
                <input
                type='range'
                id='price'
                min='0'
                max='1000'   
                onChange={handleChangeMinPrice}   
                />
                <span>{minPrice}</span>  {/* no poner esto antes, ya que sinó da brincos */}
                
            </div>

            <div>
            <label htmlFor="category">Category</label>
            <select id='category' onChange={handleChangeCategory}>
                <option value='all'>Todas</option>
                <option value='laptops'>Portátiles</option>
                <option value='smartphones'>Celulares</option>
            </select>
            </div>
        </section>
    )
}