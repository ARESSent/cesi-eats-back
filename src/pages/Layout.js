import { Link } from "react-router-dom";

const Layout = () => {
  return 
      <nav>
        <ul>
          <li>
            <Link to="/Browse">Browse</Link>
          </li>
          <li>
            <Link to="/CreateAccount">CreateAccount</Link>
          </li>
          <li>
            <Link to="/Connexion">Connexion</Link>
          </li>
        </ul>
      </nav>
};

export default Layout;