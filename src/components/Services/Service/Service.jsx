import "./Service.css";

export default function Service({ heading, children }) {
  return (
    <div className="py-3 d-flex flex-column justify-content-evenly">
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

      <button className="d-block btn btn-primary mx-auto my-0">Book an Appointment</button>
    </div>
  );
}
