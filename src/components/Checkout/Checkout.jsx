import "./Checkout.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "../../forms/CheckoutForm/CheckoutForm";

export default function Checkout() {
  const params = useParams();

  const [thank, setThank] = useState(false);

  return (
    <main className="checkout mx-auto p-4">
      {thank ? (
        <h1 className="text-center">Thank you for booking the appointment!</h1>
      ) : (
        <>
          <h1 className="text-center">Buy the service: {params.service}</h1>

          <CheckoutForm setThank={setThank} />
        </>
      )}
    </main>
  );
}
