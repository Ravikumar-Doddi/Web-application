import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="website-logo"
    />
    <ul className="un-list">
      <Link to="/" className="nav-home">
        <li>Home</li>
      </Link>
      <Link to="/product" className="nav-home">
        <li>Product</li>
      </Link>
      <Link to="/cart" className="nav-home">
        <li>Cart</li>
      </Link>
      <li>
        <button type="button" className="btn">
          Logout
        </button>
      </li>
    </ul>
  </nav>
)
export default Header
