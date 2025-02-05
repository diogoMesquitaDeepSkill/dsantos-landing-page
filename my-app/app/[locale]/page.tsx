/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppleCardsCarouselDemo } from "@/components/ui/AppleCardsCarouselDemo";
import { ImagesSliderDemo } from "@/components/ui/demo";
import { FeaturesSectionWithCardGradient } from "@/components/ui/feature-section-with-card-gradient";
import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <ImagesSliderDemo />
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
      </div>
      <AppleCardsCarouselDemo />
      <FeaturesSectionWithCardGradient />
      <Footer />
    </div>
  );
}
