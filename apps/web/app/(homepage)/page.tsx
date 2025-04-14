import { AboutUs } from "@/components/landing-page/AboutUs";
import { CallToAction } from "@/components/landing-page/CallToAction";
import { Features } from "@/components/landing-page/Features";
import { GeneralFaq } from "@/components/landing-page/GeneralFaq";
import { MainHeader } from "@/components/Header/MainHeader";
import { Hero } from "@/components/landing-page/Hero";
import { Projects } from "@/components/landing-page/Projects";
import { Testimonial } from "@/components/landing-page/Testimonial";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <MainHeader />
      <Hero />
      <Features />
      <Projects />
      <AboutUs />
      <Testimonial />
      <GeneralFaq />
      <CallToAction />
      <Footer />
    </>
  );
}
