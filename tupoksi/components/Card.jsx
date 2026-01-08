export default function Card({ icon, title, children }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-icon">{icon}</div>
        <h3>{title}</h3>
      </div>
      {children}
    </div>
  );
}
