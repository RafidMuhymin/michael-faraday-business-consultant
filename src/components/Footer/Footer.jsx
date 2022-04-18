import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="pt-2 px-3 text-center gap-3 bg-dark d-flex flex-column align-items-center">
      <nav className="d-flex flex-wrap justify-content-center text-center gap-3">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>

      <p className="text-white">
        Copyright &copy; {new Date().getFullYear()} Business Consultant
      </p>
    </footer>
  );
}
