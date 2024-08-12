import Line from "@/components/Line";
import { About, Herosection, YoutubeEmbed, Faq, Footer } from "./sections";
import Testimonials from "./sections/Testimonials";
import Vip from "./sections/Vip";

export default function Home() {
  return (
    <div>
      <Herosection />
      <YoutubeEmbed />
      <Line />
      <About />
      <Vip />
      <Line />
      <Testimonials />
      <Line />
      <Faq />
      <Footer />
    </div>
  );
}
