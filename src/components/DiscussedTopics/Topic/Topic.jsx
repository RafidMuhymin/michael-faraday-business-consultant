export default function Topic({ heading, children }) {
  return (
    <div>
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
    </div>
  );
}
