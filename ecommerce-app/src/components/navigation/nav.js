import { Link } from 'react-router-dom'
import { CartItems } from '../cart/cart'
import { ContactForm } from '../contact/contact'
import { Products } from '../products/products'
import { Api } from '../api/api'
import { SearchBar } from '../search/search'
import { useCartState } from '../cart/cartContext'
import navigation from './Navigation.module.css'

export function Home() {
    const { data, isLoading, isError } = Api(
        "https://api.noroff.dev/api/v1/online-shop"
      );

      if(isLoading) {
        return <div>Loading</div>
      }

      if(isError) {
        return <div>Error</div>
      }
    return (
        <div>
            <div className={navigation.grid}>
                {data.map((product) => (
                    <Products product={product}/>
                ))}
            </div>
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
            <div><CartItems /></div>
        </div>
    )
}

export function Navigation() {
    const state = useCartState();

    return (
        <nav className={navigation.header}>
            <Link to='/' className={navigation.none}><h1>The Cart & The Shop</h1></Link>
            <ul className={navigation.navbar}>
                <li className={navigation.navbarItems}>
                    <Link to='/' className={navigation.none}>Home</Link>
                </li>
                <li className={navigation.navbarItems}>
                    <Link to='/contact' className={navigation.none}>Contact</Link>
                </li>
                <li className={navigation.navbarItems}>
                    <SearchBar />
                </li>
                <li className={navigation.navbarItems}>
                    <Link to='/cart' className={navigation.none}>Cart {state.state.cart.map((qty) => {
                        return <div>{qty.quantity}</div>
                    })}</Link>
                </li>
            </ul>
        </nav>
    )
}