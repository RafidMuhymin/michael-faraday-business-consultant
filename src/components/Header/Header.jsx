import "./Header.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase";
import { signOut } from "firebase/auth";

export default function Header() {
  const [user] = useAuthState(auth);

  const [displayMenu, setDisplayMenu] = useState(false);

  const handleDisplayMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  const handleLogOut = () => {
    signOut(auth);
  };

  return (
    <header className="py-2 px-3 bg-primary text-white d-flex flex-column flex-lg-row align-items-lg-center">
      <div className="d-flex align-items-center">
        <div className="fs-2 brand-heading">Michael Faraday</div>

        <button
          onClick={handleDisplayMenu}
          className="ms-auto btn btn-light d-inline-block d-lg-none py-1 px-2"
        >
          <Icon icon="bytesize:menu" />
        </button>
      </div>

      <nav
        className={`ms-0 ms-lg-auto text-white d-lg-flex flex-column align-items-center flex-lg-row ${
          displayMenu ? "d-flex" : "d-none"
        } gap-3`}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>

        {user ? (
          <>
            <Link to="/checkout">Checkout</Link>
            <button onClick={handleLogOut} className="btn p-0">
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
