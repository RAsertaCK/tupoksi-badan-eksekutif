import Slide from "../components/Slide";

export default function Kahim() {
  return (
    <Slide>
      <div className="content-area">
        <h2 className="slide-title">1. KETUA HIMPUNAN (KAHIM)</h2>

        <div className="two-column">
          <div className="full-text-column">
            <div className="narrative-box">
              <p style={{ margin: 0, fontSize: 16 }}>
                "Pemegang mandat tertinggi eksekutif yang bertanggung jawab penuh
                atas arah gerak, kebijakan strategis, dan keberlangsungan
                organisasi. Ketua Himpunan berperan sebagai representasi resmi
                HMIF dalam menjalin hubungan diplomatik baik internal maupun
                eksternal, serta menjadi pengambil keputusan final dalam dinamika
                organisasi."
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
                  <strong>Kepemimpinan Strategis:</strong> Memimpin dan
                  mengkoordinasikan pelaksanaan roda organisasi sesuai AD/ART dan
                  GBHO.
                </li>
                <li>
                  <strong>Pengambilan Keputusan:</strong> Menentukan kebijakan
                  strategis dan solusi permasalahan krusial organisasi.
                </li>
                <li>
                  <strong>Representasi:</strong> Wakil resmi HMIF dalam forum
                  internal dan eksternal.
                </li>
                <li>
                  <strong>Otoritas Administratif:</strong> Menyetujui proposal
                  besar dan LPJ.
                </li>
              </ul>
            </div>
          </div>

          <div className="visual-column">
            <div className="tech-shape">
              <i className="fa-solid fa-chess-king tech-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
