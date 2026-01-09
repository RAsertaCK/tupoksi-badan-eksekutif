import Slide from "../components/Slide";

export default function Eksternal() {
  return (
    <Slide>
      <div className="content-area">
        <h2 className="slide-title">6. DEPARTEMEN EKSTERNAL</h2>

        <div className="narrative-box">
          <p style={{ margin: 0 }}>
            "Departemen yang berfokus dalam membangun citra, jejaring, dan diplomasi
            dengan pihak luar. Departemen ini bertanggung jawab memperluas
            eksistensi HMIF melalui kerjasama strategis dan pengabdian masyarakat."
          </p>
        </div>

        <div className="grid-3">
          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <i className="fa-solid fa-building-columns"></i>
              </div>
              <h3>Divisi Intra Kampus</h3>
            </div>
            <ul className="custom-list">
              <li>
                Membangun hubungan diplomatis dengan lembaga internal kampus.
              </li>
              <li>
                Mengawal isu kebijakan kampus yang berdampak pada mahasiswa
                informatika.
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <i className="fa-solid fa-handshake-simple"></i>
              </div>
              <h3>Divisi Ekstra Kampus</h3>
            </div>
            <ul className="custom-list">
              <li>
                Menjalin relasi dengan aliansi mahasiswa IT nasional dan universitas
                lain.
              </li>
              <li>
                Membangun partnership dengan swasta, pemerintah, dan alumni.
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <i className="fa-solid fa-heart-pulse"></i>
              </div>
              <h3>Divisi Sosmas</h3>
            </div>
            <ul className="custom-list">
              <li>
                Implementasi Tri Dharma Perguruan Tinggi poin pengabdian masyarakat.
              </li>
              <li>
                Kegiatan bakti sosial, desa binaan IT, dan edukasi teknologi.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>
  );
}
