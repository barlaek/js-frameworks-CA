import { Link } from 'react-router-dom'
import { Products } from '../products/products'

export function Home() {
    return (
        <div>
            <div>Home</div>
            <div><Products /></div>
        </div>
    )
}

export function Contact() {
    return <div>Contact</div>
}

export function Cart() {
    return <div>Cart</div>
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