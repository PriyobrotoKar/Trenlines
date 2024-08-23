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
    <div className="px-4 md:px-10 mt-40 lg:mt-52 md:mt-24">
      <Herosection />
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
