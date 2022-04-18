import "./Service.css";
import { useNavigate } from "react-router-dom";

export default function Service({ heading, children }) {
  const navigate = useNavigate();

  const navigateToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="service py-3 d-flex flex-column justify-content-evenly">
      <h3 className="text-center">{heading}</h3>

      <p
        className="text-secondary"
        style={{
          textAlign: "justify",
          textAlignLast: "center",
        }}
      >
        {children}
      </p>

      <button
        onClick={navigateToCheckout}
        to="/checkout"
        className="d-block btn btn-primary mx-auto my-0"
      >
        Book an Appointment
      </button>
    </div>
  );
}
