import { About, Herosection, YoutubeEmbed } from "./sections";
import { Faq } from "./sections/Faq";

export default function Home() {
  return (
    <div>
      <Herosection />
      <YoutubeEmbed />
      <About />
      <Faq />
    </div>
  );
}
