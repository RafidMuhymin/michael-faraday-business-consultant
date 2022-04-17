import "./Banner.css";

export default function Banner() {
  return (
    <section className="banner">
      <div className="py-5 px-4">
        <h1 className="fs-2 m-0 pb-3 pt-5">Michael Farrade</h1>
        <h2 className="fs-1 m-0 pb-3">Helping You Build Inner Resilience</h2>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta omnis
          dolorum fuga eos non aspernatur ullam accusamus consequatur aut
          commodi eveniet, tempore ea iure eum explicabo odio sunt a maiores
          eaque cum voluptate repellat nihil dignissimos! Quia, laboriosam
          inventore. Maiores ipsa ipsam magnam nostrum magni iusto hic facilis
          pariatur non?
        </p>

        <button className="btn btn-primary d-block mb-5">Let's Work Together</button>
      </div>
    </section>
  );
}
