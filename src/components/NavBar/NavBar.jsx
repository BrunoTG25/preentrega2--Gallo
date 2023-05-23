import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>

        <Link to={"/"}>
          <h1>Gamming</h1>
        </Link>
        <nav>
            <ul>
                <li>
                  <NavLink to={`/categoria/4`}>Juegos PS4</NavLink>
                </li>
                <li>
                  <NavLink to={`/categoria/5`}>Juegos PS5</NavLink>
                </li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar
 