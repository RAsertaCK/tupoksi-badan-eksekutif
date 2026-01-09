import Slide from "../components/Slide";

export default function Hero() {
  return (
    <Slide>
      <div
        className="content-area"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div className="title-content">
          <p className="sub-title">TUPOKSI BADAN EKSEKUTIF</p>
          <h1>
            HIMPUNAN MAHASISWA
            <br />
            INFORMATIKA
          </h1>
          <p style={{ marginTop: 20, fontSize: 20 }}>
            Tugas Pokok dan Fungsi Struktural Organisasi
          </p>
          <div className="footer-line"></div>
        </div>
      </div>
    </Slide>
  );
}
