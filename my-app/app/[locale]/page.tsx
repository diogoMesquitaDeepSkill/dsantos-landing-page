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
import Head from "next/head";

export default function Home() {
  const title = "DSantos – Excellence and Innovation in Porcelain Stoneware";
  const description =
    "We specialize in premium porcelain stoneware and ceramic flooring solutions for the business sector. Leveraging our extensive logistics expertise, we deliver quality, elegant, and reliable cladding solutions. Discover excellence with DSantos.";

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        {/* Favicon for Browsers */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        {/* Apple Touch Icon (For iOS Devices) */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/logo_squarish.png"
        />

        {/* Web App / PWA Icons (For Android & Windows) */}
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/logo_squarish.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/logo_squarish.png"
        />

        {/* Canonical URL (Now Static) */}
        <link rel="canonical" href="https://www.dsantos.de/" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://www.dsantos.de/logo.png" />
        <meta property="og:url" content="https://www.dsantos.de/" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://www.dsantos.de/logo.png" />

        {/* SEO Best Practices */}
        <meta name="robots" content="index, follow" />
      </Head>

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
    </>
  );
}
