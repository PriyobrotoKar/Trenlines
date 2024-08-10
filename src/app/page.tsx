import Line from "@/components/Line";
import { About, Herosection, YoutubeEmbed, Faq, Footer } from "./sections";
import Testimonials from "./sections/Testimonials";
import Vip from "./sections/Vip";

export default function Home() {
  return (
    <div>
      <Herosection />
      <YoutubeEmbed />
      <About />
      <Vip />
      <Line />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
}
