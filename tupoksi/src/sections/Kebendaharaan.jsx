import Slide from "../components/Slide";

export default function Kebendaharaan() {
  return (
    <Slide>
      <div className="content-area">
        <h2 className="slide-title">4. KEBENDAHARAAN</h2>

        <div className="narrative-box">
          <p style={{ margin: 0 }}>
            "Unit kerja yang bertanggung jawab atas stabilitas finansial organisasi
            melalui dua fungsi utama: pengelolaan arus kas (fiskal) dan pengembangan
            pendapatan (moneter). Kebendaharaan memastikan akuntabilitas penggunaan
            dana sekaligus menciptakan kemandirian finansial himpunan."
          </p>
        </div>

        <div className="grid-3">
          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <i className="fa-solid fa-vault"></i>
              </div>
              <h3>Bendahara Umum</h3>
            </div>
            <p>
              Perancang strategi keuangan jangka panjang dan pengawas seluruh aset
              keuangan.
            </p>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <i className="fa-solid fa-money-bill-transfer"></i>
              </div>
              <h3>Bendahara 1</h3>
            </div>
            <p
              style={{
                color: "var(--accent-primary)",
                fontSize: 14,
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Expenditure & Treasury
            </p>
            <ul className="custom-list">
              <li>Fokus pada manajemen kas keluar (pengeluaran).</li>
              <li>
                Mengatur alur pencairan dana program kerja dan pencatatan
                pembukuan harian.
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <i className="fa-solid fa-sack-dollar"></i>
              </div>
              <h3>Bendahara 2</h3>
            </div>
            <p
              style={{
                color: "var(--accent-primary)",
                fontSize: 14,
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Revenue & Business/BUMH
            </p>
            <ul className="custom-list">
              <li>Fokus pada manajemen kas masuk (pendapatan).</li>
              <li>
                Mengelola Biro Usaha Milik Himpunan (BUMH) seperti merchandise,
                atribut, dan lain-lain.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>
  );
}
