import "./Services.css";
import Service from "./Service/Service";

export default function Services() {
  return (
    <section>
      <h2 className="fs-1 px-3 py-4 text-center">Services</h2>

      <hr />

      <div className="services px-4 gap-4">
        <Service heading="CEO Coaching">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad expedita
          dignissimos accusantium nostrum ullam libero earum officia deleniti,
          enim animi consectetur deserunt recusandae incidunt inventore saepe
          quisquam beatae, cumque amet?
        </Service>

        <Service heading="Business Coaching">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad expedita
          dignissimos accusantium nostrum ullam libero earum officia deleniti,
          enim animi consectetur deserunt recusandae incidunt inventore saepe
          quisquam beatae, cumque amet?
        </Service>

        <Service heading="Management Coaching">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad expedita
          dignissimos accusantium nostrum ullam libero earum officia deleniti,
          enim animi consectetur deserunt recusandae incidunt inventore saepe
          quisquam beatae, cumque amet?
        </Service>
      </div>
    </section>
  );
}
