import Slide from "../components/Slide";
import Card from "../components/Card";

export default function Psda() {
  return (
    <Slide>
      <h2 className="slide-title">8. DEPARTEMEN PSDA</h2>

      <div className="grid-2">
        <Card icon={<i className="fa-solid fa-seedling" />} title="LDOP">
          <ul className="custom-list">
            <li>Fase awal kaderisasi.</li>
            <li>Nilai dasar & kepemimpinan.</li>
          </ul>
        </Card>

        <Card icon={<i className="fa-solid fa-stairs" />} title="PTKOM">
          <ul className="custom-list">
            <li>Fase lanjutan kaderisasi.</li>
            <li>Manajemen organisasi modern.</li>
          </ul>
        </Card>
      </div>
    </Slide>
  );
}
