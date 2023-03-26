import { Link } from 'react-router-dom'
import { ContactForm } from '../contact/contact'
import { Products } from '../products/products'
import { Cart } from '../cart/cart'

export function Home() {
    return (
        <div>
            <div>Home</div>
            <div><Products /></div>
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