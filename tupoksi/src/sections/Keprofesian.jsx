import Slide from "../components/Slide";

export default function Keprofesian() {
  return (
    <Slide>
      <div className="content-area">
        <h2 className="slide-title">7. DEPARTEMEN KEPROFESIAN</h2>

        <div className="narrative-box">
          <p style={{ margin: 0 }}>
            "Departemen yang berfungsi sebagai akselerator kompetensi akademik dan
            profesionalisme anggota. Bertugas mempersiapkan anggota HMIF agar
            memiliki keunggulan kompetitif dan kesiapan karier."
          </p>
        </div>

        <div className="grid-3">
          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <h3>Divisi Akademik & Beasiswa</h3>
            </div>
            <ul className="custom-list">
              <li>
                Fasilitasi kegiatan akademik seperti tutor sebaya dan bank soal.
              </li>
              <li>
                Distribusi informasi beasiswa dan pertukaran pelajar.
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <h3>Divisi Technopreneur</h3>
            </div>
            <ul className="custom-list">
              <li>
                Pengembangan kewirausahaan berbasis teknologi.
              </li>
              <li>
                Informasi lomba bisnis IT, hackathon, dan freelance.
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <i className="fa-solid fa-arrow-trend-up"></i>
              </div>
              <h3>Divisi Peningkatan Skill (PK)</h3>
            </div>
            <ul className="custom-list">
              <li>
                Kolaborasi pameran karya dan tugas besar.
              </li>
              <li>
                Seminar, webinar, dan workshop sertifikasi teknologi.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>
  );
}
