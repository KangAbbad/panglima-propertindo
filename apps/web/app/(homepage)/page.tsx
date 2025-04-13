import { AboutUs } from "@/components/landing-page/AboutUs";
import { Features } from "@/components/landing-page/Features";
import { Header } from "@/components/landing-page/Header/Header";
import { Hero } from "@/components/landing-page/Hero";
import { Projects } from "@/components/landing-page/Projects";
import { Testimonial } from "@/components/landing-page/Testimonial";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Projects />
      <AboutUs />
      <Testimonial />
    </>
  );
}
