import Hero from "./sections/Hero";
import Kahim from "./sections/Kahim";
import Sekjen from "./sections/Sekjen";
import Kesekretariatan from "./sections/Kesekretariatan";
import Kebendaharaan from "./sections/Kebendaharaan";
import Internal from "./sections/Internal";
import Eksternal from "./sections/Eksternal";
import Keprofesian from "./sections/Keprofesian";
import Psda from "./sections/Psda";
import Kominfo from "./sections/Kominfo";
import Closing from "./sections/Closing";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <>
      <ThemeToggle />
      <Hero />
      <Kahim />
      <Sekjen />
      <Kesekretariatan />
      <Kebendaharaan />
      <Internal />
      <Eksternal />
      <Keprofesian />
      <Psda />
      <Kominfo />
      <Closing />
    </>
  );
}
