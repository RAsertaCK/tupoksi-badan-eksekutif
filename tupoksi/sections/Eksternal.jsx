import Slide from "../components/Slide";
import Card from "../components/Card";

export default function Eksternal() {
  return (
    <Slide>
      <h2 className="slide-title">6. DEPARTEMEN EKSTERNAL</h2>

      <div className="grid-3">
        <Card
          icon={<i className="fa-solid fa-building-columns" />}
          title="Intra Kampus"
        >
          <ul className="custom-list">
            <li>Relasi antar lembaga kampus.</li>
            <li>Mengawal isu kebijakan kampus.</li>
          </ul>
        </Card>

        <Card
          icon={<i className="fa-solid fa-handshake-simple" />}
          title="Ekstra Kampus"
        >
          <ul className="custom-list">
            <li>Aliansi mahasiswa IT nasional.</li>
            <li>Kerja sama instansi & alumni.</li>
          </ul>
        </Card>

        <Card
          icon={<i className="fa-solid fa-heart-pulse" />}
          title="Sosmas"
        >
          <ul className="custom-list">
            <li>Pengabdian masyarakat.</li>
            <li>Bakti sosial & edukasi IT.</li>
          </ul>
        </Card>
      </div>
    </Slide>
  );
}
