import Slide from "../components/Slide";

export default function Sekjen() {
  return (
    <Slide>
      <h2 className="slide-title">2. SEKRETARIS JENDERAL</h2>

      <div className="two-column">
        <div>
          <div className="narrative-box">
            Kepala operasional organisasi yang bertanggung jawab memastikan
            visi Ketua Himpunan diterjemahkan menjadi langkah taktis.
          </div>

          <ul className="custom-list">
            <li>Mengkoordinasikan program kerja seluruh departemen.</li>
            <li>Menjamin ketepatan timeline dan kualitas kegiatan.</li>
            <li>Menjadi penghubung komunikasi antar-departemen.</li>
            <li>Memverifikasi BA, KAK, dan SPD.</li>
          </ul>
        </div>

        <div className="visual-column">
          <i className="fa-solid fa-gavel tech-icon" />
        </div>
      </div>
    </Slide>
  );
}
