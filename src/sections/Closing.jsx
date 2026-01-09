import Slide from "../components/Slide";

export default function Closing() {
  return (
    <Slide>
      <div
        className="content-area"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div
          className="tech-shape"
          style={{ width: 50, height: 50, marginBottom: 30 }}
        >
          <i
            className="fa-solid fa-check tech-icon"
            style={{ fontSize: 50 }}
          ></i>
        </div>

        <h1 style={{ fontSize: 80 }}>TERIMA KASIH</h1>
        <p style={{ marginTop: 20 }}>
          HMIF - Himpunan Mahasiswa Informatika
        </p>

        <div style={{ display: "flex", gap: 30, marginTop: 40 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: "var(--accent-primary)",
            }}
          >
            <i className="fa-brands fa-instagram fa-2x"></i>
            <span style={{ fontSize: 24 }}>@hmif_official</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: "var(--accent-primary)",
            }}
          >
            <i className="fa-solid fa-globe fa-2x"></i>
            <span style={{ fontSize: 24 }}>hmif.org</span>
          </div>
        </div>
      </div>
    </Slide>
  );
}
