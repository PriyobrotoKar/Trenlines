import Line from "@/components/Line";
import {
  About,
  Herosection,
  YoutubeEmbed,
  Testimonials,
  Vip,
  Faq,
  Footer,
  Resources,
} from "@/containers";

export default function Home() {
  return (
    <div>
      <Herosection />
      <YoutubeEmbed />
      <Line />
      <About />
      <Resources />
      <Vip />
      <Line />
      <Testimonials />
      <Line />
      <Faq />
      <Footer />
    </div>
  );
}
