import "./About.css";
import src from "../../images/rafid-muhymin.jpeg";

export default function About() {
  return (
    <main className="about mx-auto p-4">
      <img
        className="img-fluid d-block mx-auto rounded-full"
        src={src}
        alt="Rafid Muhymin Wafi"
      />

      <h1 className="my-3 text-center">Rafid Muhymin Wafi</h1>

      <p className="text-center">
        An 18-year-old boy, one of the maintainers of the{" "}
        <a href="https://astro.build/">Astro JS</a> project, more a web dev than
        a college student. I love to play with JavaScript APIs in my free time.
        Experienced with JS, NodeJS, Astro JS, HTML, CSS, SCSS, React JS, Gatsby
        JS. Have used Bootstrap, Tailwind CSS, Next.js, Preact, Svelte, Vue,
        SolidJS, Lit. I am also planning to be a full-time blogger at{" "}
        <a href="https://softhardsystem.com/">softhardsystem.com</a>
      </p>

      <p className="text-center">
        My current goal is to contribute to Open Source as much as possible for
        me. I am also trying to join a project or company as a Software Engineer
        or Web Developer.
      </p>

      <p className="text-center">
        To achieve my goal, I am currently one of the maintainers of the{" "}
        <a href="https://astro.build/">Astro JS</a> project. I am trying to
        contribute to the project as much as I can. I have written a few
        libraries too for Astro, such as{" "}
        <a href="https://npmjs.org/package/astro-spa">Astro SPA</a> and{" "}
        <a href="https://npmjs.org/package/astro-imagetools">
          Astro ImageTools
        </a>
        .
      </p>
    </main>
  );
}
