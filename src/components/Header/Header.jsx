import "./Header.css";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
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
    <header className="p-3 bg-primary text-white d-flex flex-column flex-lg-row align-items-lg-center">
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
        className={`my-3 my-lg-0 ms-0 ms-lg-auto text-white d-lg-flex flex-column align-items-center flex-lg-row ${
          displayMenu ? "d-flex" : "d-none"
        } gap-3`}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>

        {user ? (
          <>
            <button onClick={handleLogOut} className="btn p-0">
              Log Out
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
