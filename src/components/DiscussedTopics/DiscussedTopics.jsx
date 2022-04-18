import topics from "../../data/topics";
import "./DiscussedTopics.css";
import Topic from "./Topic/Topic";

export default function DiscussedTopics() {
  return (
    <section>
      <h2 className="fs-1 py-4 px-3 text-center">Topics I Discuss</h2>

      <hr />

      <div className="topics gap-3 px-4 py-3">
        {topics.map(({ name, lessons }) => (
          <Topic name={name} lessons={lessons} />
        ))}
      </div>
    </section>
  );
}
