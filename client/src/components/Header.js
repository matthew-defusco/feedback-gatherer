import { useSelector } from 'react-redux';

const Header = () => {
  const { user, isLoading } = useSelector((store) => store.auth);

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="left brand-logo">
          Emaily
        </a>
        <ul className="right">
          {isLoading && null}
          {user && (
            <li>
              <a>Logout</a>
            </li>
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
