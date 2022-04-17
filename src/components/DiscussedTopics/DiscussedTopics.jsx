import "./DiscussedTopics.css";
import Topic from "./Topic/Topic";

export default function DiscussedTopics() {
  return (
    <section>
      <h2 className="fs-1 py-4 px-3 text-center">Topics I Discuss</h2>

      <div className="topics px-4 gap-4">
        <Topic heading="Motivation">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          debitis corporis ipsum cupiditate, minima quaerat enim maxime dolorem
          doloribus perspiciatis, quo consequuntur atque accusamus dolores
          exercitationem suscipit sint asperiores reiciendis?
        </Topic>

        <Topic heading="Vision">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          debitis corporis ipsum cupiditate, minima quaerat enim maxime dolorem
          doloribus perspiciatis, quo consequuntur atque accusamus dolores
          exercitationem suscipit sint asperiores reiciendis?
        </Topic>

        <Topic heading="Strategy">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          debitis corporis ipsum cupiditate, minima quaerat enim maxime dolorem
          doloribus perspiciatis, quo consequuntur atque accusamus dolores
          exercitationem suscipit sint asperiores reiciendis?
        </Topic>
      </div>
    </section>
  );
}
