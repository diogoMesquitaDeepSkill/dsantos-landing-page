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
import { useParams } from "next/navigation";

export default function Home() {
  const params = useParams();
  const locale = params.locale as string;

  let title = "";
  let description = "";

  if (locale === "pt") {
    title = "DSantos – Excelência e Inovação em Grés Porcelânico";
    description =
      "Somos especialistas em grés porcelânico e pavimentos cerâmicos de alta qualidade para o mercado empresarial. Graças ao nosso amplo conhecimento em logística, oferecemos soluções de revestimento premium que combinam qualidade, elegância e consistência. Descubra a excelência com a DSantos.";
  } else if (locale === "de") {
    title = "DSantos – Exzellenz und Innovation in Porzellansteinzeug";
    description =
      "Wir sind Spezialisten für Porzellansteinzeug und hochwertige keramische Bodenbeläge für den Unternehmenssektor. Dank unseres umfassenden Logistik-Know-hows bieten wir erstklassige Veredelungslösungen, die Qualität, Eleganz und Beständigkeit vereinen. Entdecken Sie Exzellenz mit DSantos.";
  } else {
    // Default to English
    title = "DSantos – Excellence and Innovation in Porcelain Stoneware";
    description =
      "We specialize in premium porcelain stoneware and ceramic flooring solutions for the business sector. Leveraging our extensive logistics expertise, we deliver quality, elegant, and reliable cladding solutions. Discover excellence with DSantos.";
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/favicon.ico" />
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
