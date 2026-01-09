import Slide from "../components/Slide";

export default function Psda() {
  return (
    <Slide>
      <div className="content-area">
        <h2 className="slide-title">8. DEPARTEMEN PSDA</h2>

        <div className="narrative-box">
          <p style={{ margin: 0 }}>
            "Departemen yang berperan sebagai pusat kaderisasi dan pendidikan
            karakter untuk menjamin keberlanjutan regenerasi organisasi."
          </p>
        </div>

        <h3 style={{ marginBottom: 20 }}>Jenjang Kaderisasi:</h3>

        <div className="grid-2">
          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <i className="fa-solid fa-seedling"></i>
              </div>
              <h3>LDOP</h3>
            </div>
            <p
              style={{
                color: "var(--accent-primary)",
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              Latihan Dasar Organisasi Kepemimpinan
            </p>
            <ul className="custom-list">
              <li>Fase awal kaderisasi anggota.</li>
              <li>
                Penanaman nilai organisasi dan dasar kepemimpinan berbasis proyek.
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <i className="fa-solid fa-stairs"></i>
              </div>
              <h3>PTKOM</h3>
            </div>
            <p
              style={{
                color: "var(--accent-primary)",
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              Pelatihan Tata Kelola Organisasi Modern
            </p>
            <ul className="custom-list">
              <li>Fase lanjutan pembinaan anggota.</li>
              <li>
                Materi kepemimpinan lanjutan dan manajemen organisasi modern.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>
  );
}
