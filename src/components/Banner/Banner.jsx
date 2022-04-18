import "./Banner.css";

export default function Banner() {
  return (
    <section className="banner">
      <div className="py-5 px-4">
        <h1 className="fs-2 m-0 pb-3 pt-5">Michael Farrade</h1>
        <h2 className="fs-1 m-0 pb-3">Helping You Build Inner Resilience</h2>

        <p>
          Hey, I am Michael Faraday. I am a former CEO and professional business
          coach. I have been coaching since 14 years and have coached over 1,000
          people all over the world. If you want to grow your busines and
          looking for personalized guidance, Michael Faraday is your guy.
        </p>

        <a href="#services" className="btn btn-primary d-block mb-5">
          Let's Work Together
        </a>
      </div>
    </section>
  );
}
