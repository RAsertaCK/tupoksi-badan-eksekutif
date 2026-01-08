import Slide from "../components/Slide";

export default function Kahim() {
  return (
    <Slide>
      <h2 className="slide-title">1. KETUA HIMPUNAN (KAHIM)</h2>

      <div className="two-column">
        <div>
          <div className="narrative-box">
            Pemegang mandat tertinggi eksekutif yang bertanggung jawab penuh atas
            arah gerak, kebijakan strategis, dan keberlangsungan organisasi.
          </div>

          <ul className="custom-list">
            <li>
              <strong>Kepemimpinan Strategis:</strong> Memimpin roda organisasi
              sesuai AD/ART dan GBHO.
            </li>
            <li>
              <strong>Pengambilan Keputusan:</strong> Menentukan kebijakan
              strategis organisasi.
            </li>
            <li>
              <strong>Representasi:</strong> Wakil resmi HMIF dalam forum internal
              dan eksternal.
            </li>
            <li>
              <strong>Otoritas Administratif:</strong> Mengesahkan proposal dan
              LPJ strategis.
            </li>
          </ul>
        </div>

        <div className="visual-column">
          <i className="fa-solid fa-chess-king tech-icon" />
        </div>
      </div>
    </Slide>
  );
}
