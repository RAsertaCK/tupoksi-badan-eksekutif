import Slide from "../components/Slide";
import Card from "../components/Card";

export default function Kesekretariatan() {
  return (
    <Slide>
      <h2 className="slide-title">3. KESEKRETARIATAN</h2>

      <div className="narrative-box">
        Unit pusat data, arsip, dan administrasi organisasi HMIF.
      </div>

      <div className="grid-2">
        <Card
          icon={<i className="fa-solid fa-envelope-open-text" />}
          title="Sekretaris Umum 1"
        >
          <ul className="custom-list">
            <li>Korespondensi umum organisasi.</li>
            <li>
              Pendampingan administrasi <strong>PSDA</strong> dan{" "}
              <strong>Eksternal</strong>.
            </li>
          </ul>
        </Card>

        <Card
          icon={<i className="fa-solid fa-file-pen" />}
          title="Sekretaris Umum 2"
        >
          <ul className="custom-list">
            <li>Mendukung operasional Sekum 1.</li>
            <li>
              Pendampingan administrasi <strong>Internal</strong>,{" "}
              <strong>Kominfo</strong>, dan <strong>Keprofesian</strong>.
            </li>
          </ul>
        </Card>
      </div>
    </Slide>
  );
}
