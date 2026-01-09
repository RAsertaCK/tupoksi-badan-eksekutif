import Slide from "../components/Slide";

export default function Internal() {
  return (
    <Slide>
      <div className="content-area">
        <h2 className="slide-title">5. DEPARTEMEN INTERNAL</h2>

        <div className="narrative-box">
          <p style={{ margin: 0 }}>
            "Departemen yang berfokus pada pembangunan iklim organisasi yang
            kondusif. Bertugas menjaga soliditas, kesejahteraan, dan rasa memiliki
            anggota terhadap himpunan."
          </p>
        </div>

        <div className="grid-2">
          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <i className="fa-solid fa-users-rays"></i>
              </div>
              <h3>Divisi Harmonisasi</h3>
            </div>
            <ul className="custom-list">
              <li>Pendataan database anggota aktif.</li>
              <li>Fasilitator komunikasi anggota & pengurus.</li>
              <li>Resolusi konflik internal.</li>
            </ul>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <i className="fa-solid fa-gamepad"></i>
              </div>
              <h3>Divisi Seni & Olahraga</h3>
            </div>
            <ul className="custom-list">
              <li>Wadah minat bakat seni & olahraga.</li>
              <li>Kegiatan rekreasional dan bonding.</li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>
  );
}
