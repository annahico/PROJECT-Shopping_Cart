import { AddToCartIcon } from './Icons.jsx';
import './Products.css';


export function Products ({ products }) {
    return (
        <main className='products'>
          <ul>
          {products.slice(0, 10).map(product => ( //el slice hace que en la pagina solo muestre un total de 10 productos
                    <li key={product.id}>
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                    />
                        <div>
                        <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button>
                                <AddToCartIcon />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}
