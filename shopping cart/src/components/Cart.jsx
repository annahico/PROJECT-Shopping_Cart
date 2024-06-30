import './Cart.css'

import { CartIcon, ClearCartIcon } from './Icons.jsx'

export function Cart () {
    return (
<>
        <label className='cart-button' htmlFor='cartCheckboxId'>
            <CartIcon />
        </label>
        <input id={cartCheckboxId} type ='checkbox' hidden/>

        <aside className='cart'>
            <ul>
                <li>
                    <img
                    src='http://i.dummyjson.com/data/products/2/thumbail.jpg'
                    alt='Iphone'
                    />
                    <div>
                        <strong>Iphone</strong> - $1499
                    </div>

                    <footer>
                        <small>
                        Qty: 1
                        </small>
                        <button>+</button>
                    </footer>
                </li>
            </ul>
            <button>
                <ClearCartIcon />
            </button>
        </aside>
        
        </>
  )
}



