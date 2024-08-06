import { About, Herosection, YoutubeEmbed, Faq, Footer } from "./sections";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Herosection />
      <YoutubeEmbed />
      <About />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
}
