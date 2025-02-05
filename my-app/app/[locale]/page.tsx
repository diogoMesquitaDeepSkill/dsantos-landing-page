/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppleCardsCarouselDemo } from "@/components/ui/AppleCardsCarouselDemo";
import { ContactForm } from "@/components/ui/contactform";
import { ImagesSliderDemo } from "@/components/ui/demo";
import { FeaturesSectionWithCardGradient } from "@/components/ui/feature-section-with-card-gradient";
import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/hero";
import { ProductSizes } from "@/components/ui/product-sizes";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <ImagesSliderDemo />
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
      </div>
      <AppleCardsCarouselDemo />
      <div className="w-full py-20 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeaturesSectionWithCardGradient />
          <div className="mt-20">
            <ProductSizes />
          </div>
          <div className="mt-20">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
