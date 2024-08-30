import Animate from "@/components/Animate";
import JournalModal from "@/components/JournalModal";
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
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="px-4 md:px-10 mt-40  md:mt-24 lg:mt-36">
      <Herosection />
      <Animate
        hidden={{ opacity: 0, transform: "translateY(20px)" }}
        visible={{ opacity: 1, transform: "translateY(0)" }}
        stagger
        options={{ margin: "0%", offsetDelay: 1 }}
        className="w-full"
      >
        <YoutubeEmbed className="hidden md:flex" />
      </Animate>
      <Line />
      <About />
      <Suspense>
        <JournalModal />
      </Suspense>
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
