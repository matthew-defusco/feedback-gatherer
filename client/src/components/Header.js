import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Payments from "./Payments";

const Header = () => {
  const { user, isLoading } = useSelector((store) => store.auth);

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={user ? "/surveys" : "/"} className="left brand-logo">
          Emaily
        </Link>
        <ul className="right">
          {isLoading && null}
          {user && (
            <>
              <li>
                <Payments />
              </li>
              <li>
                <a href="/api/logout">Logout</a>
              </li>
            </>
          )}
          {!user && (
            <li>
              <a href="/auth/google">Login With Google</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
