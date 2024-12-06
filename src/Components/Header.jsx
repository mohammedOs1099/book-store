import Alert from "react-bootstrap/Alert";
import { useDispatch, useSelector } from "react-redux";
import { loginOut } from "../Redux/AuthSlice";

const Header = () => {
  const { error } = useSelector((state) => state.book);
  const { isLogedIn } = useSelector((state) => state.auth);
   const dispatch  = useDispatch();
  return (
    <>
      <nav className="navbar navbar-dark bg-dark p-3">
        <span className="navbar-brand mb-0 h1">My Books</span>

        <button
          onClick={() => dispatch(loginOut())}
          className="btn btn-outline-primary "
          type="submit"
        >
          {isLogedIn ? "log out" : "log in"}
        </button>
      </nav>
      {error && <Alert variant={"danger"}>{error}</Alert>}
    </>
  );
};

export default Header;
