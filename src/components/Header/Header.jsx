import "./Header.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [displayMenu, setDisplayMenu] = useState(false);

  const handleClick = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <header className="py-2 px-3 bg-primary text-white d-flex flex-column flex-lg-row align-items-lg-center">
      <div className="d-flex align-items-center">
        <div className="fs-2 brand-heading">Michael Faraday</div>

        <button
          onClick={handleClick}
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
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
    </header>
  );
}
