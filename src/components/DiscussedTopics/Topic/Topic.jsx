import "./Topic.css";

export default function Topic({ name, lessons }) {
  return (
    <div className="topic">
      <h3 className="topic text-center">{name}</h3>

      <div className="my-3 p-3 rounded-3">
        <h4>Lessons</h4>

        <ul>
          <li>CEO Coaching: {lessons.cc}</li>
          <li>Business Coaching: {lessons.bc}</li>
          <li>Leadership Coaching: {lessons.lc}</li>
        </ul>
      </div>
    </div>
  );
}
