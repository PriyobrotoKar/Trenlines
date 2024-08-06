import { About, Herosection, YoutubeEmbed } from "./sections";
import { Faq } from "./sections/Faq";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Herosection />
      <YoutubeEmbed />
      <About />
      <Testimonials />
      <Faq />
    </div>
  );
}
