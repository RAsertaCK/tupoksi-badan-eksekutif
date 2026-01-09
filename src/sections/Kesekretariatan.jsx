import Slide from "../components/Slide";

export default function Kesekretariatan() {
  return (
    <Slide>
      <div className="content-area">
        <h2 className="slide-title">3. KESEKRETARIATAN</h2>

        <div className="narrative-box">
          <p style={{ margin: 0 }}>
            "Unit kerja yang berfungsi sebagai pusat data, arsip, dan administrasi
            organisasi. Kesekretariatan memastikan tertib administrasi, alur
            surat-menyurat yang rapi, serta mendistribusikan dukungan administratif
            secara spesifik ke setiap departemen melalui sistem matriks sekretaris."
          </p>
        </div>

        <p style={{ marginBottom: 20 }}>
          <strong>Tupoksi Umum:</strong> Mengelola pengarsipan dokumen, notulensi
          rapat, surat-menyurat, dan inventarisasi data organisasi.
        </p>

        <div className="grid-2">
          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <i className="fa-solid fa-envelope-open-text"></i>
              </div>
              <h3>Sekretaris Umum 1</h3>
            </div>
            <ul className="custom-list">
              <li>Bertanggung jawab atas korespondensi umum.</li>
              <li>
                Mengampu pendampingan administrasi khusus untuk{" "}
                <strong>Departemen PSDA</strong> dan{" "}
                <strong>Departemen Eksternal</strong>.
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <i className="fa-solid fa-file-pen"></i>
              </div>
              <h3>Sekretaris Umum 2</h3>
            </div>
            <ul className="custom-list">
              <li>Membantu tugas operasional Sekum 1.</li>
              <li>
                Mengampu pendampingan administrasi khusus untuk{" "}
                <strong>Departemen Internal</strong>,{" "}
                <strong>Departemen Kominfo</strong>, dan{" "}
                <strong>Departemen Keprofesian</strong>.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>
  );
}
