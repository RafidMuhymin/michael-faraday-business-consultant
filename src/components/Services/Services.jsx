import "./Services.css";
import Service from "./Service/Service";
import services from "../../data/services";

export default function Services() {
  return (
    <section id="services">
      <h2 className="fs-1 px-3 py-4 text-center">Services</h2>

      <hr />

      <div className="services px-4 gap-4">
        {services.map((service) => (
          <Service key={service.name} {...service} />
        ))}
      </div>
    </section>
  );
}
