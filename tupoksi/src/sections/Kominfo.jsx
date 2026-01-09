import Slide from "../components/Slide";

export default function Kominfo() {
  return (
    <Slide>
      <div className="content-area">
        <h2 className="slide-title">9. DEPARTEMEN KOMINFO</h2>

        <div className="narrative-box">
          <p style={{ margin: 0 }}>
            "Pusat pengelolaan media dan informasi yang membentuk citra positif
            himpunan melalui kanal digital yang kreatif dan inovatif."
          </p>
        </div>

        <div className="grid-3">
          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <i className="fa-solid fa-camera-retro"></i>
              </div>
              <h3>Divisi Publikasi & Dokumentasi</h3>
            </div>
            <ul className="custom-list">
              <li>Dokumentasi seluruh agenda kegiatan.</li>
              <li>Distribusi informasi kegiatan ke publik.</li>
            </ul>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <i className="fa-solid fa-microphone-lines"></i>
              </div>
              <h3>Divisi Konten Kreatif</h3>
            </div>
            <ul className="custom-list">
              <li>Produksi konten edukatif & hiburan IT.</li>
              <li>Strategi konten media sosial dan website.</li>
            </ul>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <i className="fa-solid fa-pen-nib"></i>
              </div>
              <h3>Divisi Dekraf</h3>
            </div>
            <ul className="custom-list">
              <li>Layanan desain grafis branding.</li>
              <li>Pembuatan poster, banner, dan feeds.</li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>
  );
}
