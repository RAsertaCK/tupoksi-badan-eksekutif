export default function Slide({ children }) {
  return (
    <section className="slide-container">
      <div className="bg-grid" />
      {children}
    </section>
  );
}
