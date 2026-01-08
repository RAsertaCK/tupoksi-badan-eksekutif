import Slide from "../components/Slide";
import Card from "../components/Card";

export default function Kominfo() {
  return (
    <Slide>
      <h2 className="slide-title">9. DEPARTEMEN KOMINFO</h2>

      <div className="grid-3">
        <Card
          icon={<i className="fa-solid fa-camera-retro" />}
          title="Pubdok"
        >
          <ul className="custom-list">
            <li>Dokumentasi kegiatan.</li>
            <li>Distribusi informasi.</li>
          </ul>
        </Card>

        <Card
          icon={<i className="fa-solid fa-microphone-lines" />}
          title="Konten Kreatif"
        >
          <ul className="custom-list">
            <li>Podcast, video, artikel IT.</li>
            <li>Manajemen media sosial.</li>
          </ul>
        </Card>

        <Card
          icon={<i className="fa-solid fa-pen-nib" />}
          title="Dekraf"
        >
          <ul className="custom-list">
            <li>Desain visual.</li>
            <li>Branding & aset grafis.</li>
          </ul>
        </Card>
      </div>
    </Slide>
  );
}
