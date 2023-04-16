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
          {/* If waiting for new credits to be loaded... */}
          {user && isLoading && (
            <div style={{ marginRight: "150px", marginTop: "10px" }}>
              <div class="preloader-wrapper small active">
                <div class="spinner-layer spinner-green-only">
                  <div class="circle-clipper left">
                    <div class="circle"></div>
                  </div>
                  <div class="gap-patch">
                    <div class="circle"></div>
                  </div>
                  <div class="circle-clipper right">
                    <div class="circle"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* If the user is logged in and there are no new credits to load.... */}
          {user && !isLoading && (
            <>
              <li>
                <Payments />
              </li>
              <li style={{ margin: "0 10px" }}>Credits: {user.credits}</li>
              <li>
                <a href="/api/logout">Logout</a>
              </li>
            </>
          )}
          {/* If the user is not logged in... */}
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
