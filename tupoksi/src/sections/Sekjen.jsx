import Slide from "../components/Slide";

export default function Sekjen() {
  return (
    <Slide>
      <div className="content-area">
        <h2 className="slide-title">2. SEKRETARIS JENDERAL</h2>

        <div className="two-column">
          <div className="full-text-column">
            <div className="narrative-box">
              <p style={{ margin: 0, fontSize: 16 }}>
                "Pejabat eksekutif yang bertindak sebagai kepala operasional
                organisasi. Sekretaris Jenderal bertanggung jawab menerjemahkan
                visi strategis Ketua Himpunan menjadi langkah taktis di lapangan,
                memastikan sinergi antar-departemen, serta mengawal ketepatan
                waktu pelaksanaan program kerja."
              </p>
            </div>

            <div className="scrollable">
              <h3
                style={{
                  color: "var(--accent-primary)",
                  marginBottom: 10,
                  fontSize: 18,
                }}
              >
                Tugas Pokok & Fungsi:
              </h3>

              <ul className="custom-list">
                <li>
                  <strong>Koordinasi Operasional:</strong> Mengawasi seluruh
                  program kerja departemen.
                </li>
                <li>
                  <strong>Penjamin Mutu:</strong> Menjaga kualitas dan timeline
                  kegiatan.
                </li>
                <li>
                  <strong>Jembatan Internal:</strong> Penghubung komunikasi antar
                  departemen.
                </li>
                <li>
                  <strong>Otoritas Administratif:</strong> Verifikasi BA, KAK,
                  dan SPD.
                </li>
              </ul>
            </div>
          </div>

          <div className="visual-column">
            <div className="tech-shape">
              <i className="fa-solid fa-gavel tech-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
