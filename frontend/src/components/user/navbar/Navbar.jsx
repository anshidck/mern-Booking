import { useDispatch, useSelector } from "react-redux";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { logout, reset } from "../../../features/user/authSlice";
import { useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isError, message } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
  },[user, isError, message])
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">lamabooking</span>
        </Link>
        {user && user ? (
          <button onClick={onLogout} className="navButton">{user && user.name}</button>
        ) : (
          <>
            <div className="navItems">
              <Link to="/register">
                <button className="navButton">Register</button>
              </Link>
              <Link to="/login">
                <button className="navButton">Login</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
