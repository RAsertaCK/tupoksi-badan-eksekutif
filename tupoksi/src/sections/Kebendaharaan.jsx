import Slide from "../components/Slide";
import Card from "../components/Card";

export default function Kebendaharaan() {
  return (
    <Slide>
      <h2 className="slide-title">4. KEBENDAHARAAN</h2>

      <div className="grid-3">
        <Card icon={<i className="fa-solid fa-vault" />} title="Bendahara Umum">
          Pengawas seluruh aset dan perancang strategi keuangan.
        </Card>

        <Card
          icon={<i className="fa-solid fa-money-bill-transfer" />}
          title="Bendahara 1"
        >
          <ul className="custom-list">
            <li>Manajemen kas keluar.</li>
            <li>Pencairan dana dan pembukuan.</li>
          </ul>
        </Card>

        <Card
          icon={<i className="fa-solid fa-sack-dollar" />}
          title="Bendahara 2"
        >
          <ul className="custom-list">
            <li>Manajemen kas masuk.</li>
            <li>Pengelolaan BUMH & merchandise.</li>
          </ul>
        </Card>
      </div>
    </Slide>
  );
}
