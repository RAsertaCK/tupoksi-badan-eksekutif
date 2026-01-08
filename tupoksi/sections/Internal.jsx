import Slide from "../components/Slide";
import Card from "../components/Card";

export default function Internal() {
  return (
    <Slide>
      <h2 className="slide-title">5. DEPARTEMEN INTERNAL</h2>

      <div className="grid-2">
        <Card
          icon={<i className="fa-solid fa-users-rays" />}
          title="Divisi Harmonisasi"
        >
          <ul className="custom-list">
            <li>Database anggota aktif.</li>
            <li>Fasilitator komunikasi internal.</li>
            <li>Resolusi konflik anggota.</li>
          </ul>
        </Card>

        <Card
          icon={<i className="fa-solid fa-gamepad" />}
          title="Divisi Seni & Olahraga"
        >
          <ul className="custom-list">
            <li>Wadah minat bakat seni dan olahraga.</li>
            <li>Kegiatan bonding dan rekreasi.</li>
          </ul>
        </Card>
      </div>
    </Slide>
  );
}
