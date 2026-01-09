export default function Slide({ children, center = false }) {
  return (
    <section
      className={`slide-container reveal ${
        center ? "closing-center" : ""
      }`}
    >
      <div className="bg-grid"></div>

      <div
        className="content-area"
        style={
          center
            ? { justifyContent: "center", alignItems: "center" }
            : {}
        }
      >
        {children}
      </div>
    </section>
  );
}
