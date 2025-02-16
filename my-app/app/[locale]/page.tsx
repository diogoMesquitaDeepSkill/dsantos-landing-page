/* eslint-disable @typescript-eslint/no-unused-vars */
import AboutUs from "@/components/ui/about";
import { AppleCardsCarouselDemo } from "@/components/ui/AppleCardsCarouselDemo";
import { ContactForm } from "@/components/ui/contactform";
import { ImagesSliderDemo } from "@/components/ui/demo";
import { FeaturesSectionWithCardGradient } from "@/components/ui/feature-section-with-card-gradient";
import FileSection from "@/components/ui/file-section";
import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/hero";
import { Navigation } from "@/components/ui/navigation";
import { ProductSizes } from "@/components/ui/product-sizes";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navigation />
      <ImagesSliderDemo />

      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
      </div>

      <div className="w-full py-10 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="our-product">
            <AppleCardsCarouselDemo />
          </div>
          <div id="specifications" className="mt-10">
            <FeaturesSectionWithCardGradient />
          </div>

          <div id="sizes" className="mt-10">
            <ProductSizes />
          </div>

          <div id="contact-form" className="mt-10">
            <ContactForm />
          </div>

          <div id="file-section" className="mt-10">
            <FileSection />
          </div>
          <div id="about-us" className="mt-10">
            <AboutUs />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
