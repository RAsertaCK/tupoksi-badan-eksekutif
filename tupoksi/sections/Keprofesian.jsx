import Slide from "../components/Slide";
import Card from "../components/Card";

export default function Keprofesian() {
  return (
    <Slide>
      <h2 className="slide-title">7. DEPARTEMEN KEPROFESIAN</h2>

      <div className="grid-3">
        <Card
          icon={<i className="fa-solid fa-graduation-cap" />}
          title="Akademik & Beasiswa"
        >
          <ul className="custom-list">
            <li>Tutorial & bank soal.</li>
            <li>Informasi beasiswa.</li>
          </ul>
        </Card>

        <Card
          icon={<i className="fa-solid fa-briefcase" />}
          title="Technopreneur"
        >
          <ul className="custom-list">
            <li>Startup & kewirausahaan IT.</li>
            <li>Hackathon & freelance.</li>
          </ul>
        </Card>

        <Card
          icon={<i className="fa-solid fa-arrow-trend-up" />}
          title="Peningkatan Skill"
        >
          <ul className="custom-list">
            <li>Pameran karya.</li>
            <li>Workshop & sertifikasi.</li>
          </ul>
        </Card>
      </div>
    </Slide>
  );
}
