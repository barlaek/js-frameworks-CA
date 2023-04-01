import { Link } from 'react-router-dom'
import { CartItems } from '../cart/cart'
import { ContactForm } from '../contact/contact'
import { Products } from '../products/products'
import { Api } from '../api/api'
import { SearchBar } from '../search/search'

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
            <div>Home</div>
            {data.map((product) => (
                <Products product={product}/>
            ))}
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
                    <SearchBar />
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