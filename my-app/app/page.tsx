import { AppleCardsCarouselDemo } from "@/components/ui/AppleCardsCarouselDemo";
import { ImagesSliderDemo } from "@/components/ui/demo";
import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/hero";

export default function Home() {
  return (
    <div>
      <ImagesSliderDemo />
      <Hero />
      <AppleCardsCarouselDemo />
      <Footer />
    </div>
  );
}
