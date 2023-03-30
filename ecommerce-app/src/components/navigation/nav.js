import { Link } from 'react-router-dom'
import Cart from '../cart/cart'
import { CartState } from '../cart/cartContext'
import { ContactForm } from '../contact/contact'
// import { Products } from '../products/products'

export function Home() {
    const { state: { products } } = CartState();

    console.log(products)
    return (
        <div>
            <div>Home</div>
            {/* <div><Products /></div> */}
            {/* { products.map((product) => {
                return <div>{product.title}</div>
            })} */}
        </div>
    )
}

export function Contact() {
    return (
        <div>
            <div>Contact</div>
            <div><ContactForm /></div>
        </div>
    )
}

export function CartContainer() {
    return (
        <div>
            <div>Cart</div>
            <div><Cart /></div>
        </div>
    )
}

export function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/cart'>Cart</Link>
                </li>
            </ul>
        </nav>
    )
}

export function Header() {
    return (
        <header>
            <div>Header</div>
            <Nav />
        </header>
    )
}