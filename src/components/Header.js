import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
          <ul>
            <li>
              <Link to="/Browse">Browse</Link>
            </li>
            <li>
              <Link to="/Cart">Cart</Link>
            </li>
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
            <li>
              <Link to="/LogIn">Log In</Link>
            </li>
            <li>
              <Link to="/SignIn">Sign In</Link>
            </li>
          </ul>
        </nav>  
    </header>
  );
};

export default Header;