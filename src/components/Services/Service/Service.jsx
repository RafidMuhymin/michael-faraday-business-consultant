import "./Service.css";
import { useNavigate } from "react-router-dom";

export default function Service({ name, description, image, price }) {
  const navigate = useNavigate();

  const navigateToCheckout = () => {
    navigate(`/checkout/${name}`);
  };

  return (
    <div className="service py-3 d-flex flex-column justify-content-evenly">
      <h3 className="text-center">{name}</h3>

      <img className="img-fluid py-2" src={image} alt={name} />

      <p
        className="text-secondary"
        style={{
          textAlign: "justify",
          textAlignLast: "center",
        }}
      >
        {description}
      </p>

      <button
        onClick={navigateToCheckout}
        className="d-block btn btn-primary mx-auto my-0"
      >
        Book an Appointment for ${price}
      </button>
    </div>
  );
}
