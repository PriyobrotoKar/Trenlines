import About from "./About";
import Herosection from "./Herosection";
import YoutubeEmbed from "./YoutubeEmbed";

export default function Home() {
  return (
    <div>
      <Herosection />
      <YoutubeEmbed />
      <About />
    </div>
  );
}
