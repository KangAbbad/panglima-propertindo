import { AboutUs } from "./components/AboutUs";
import { Booking } from "./components/Booking";
import { Features } from "./components/Features";
import { GeneralFaq } from "./components/GeneralFaq";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Testimonial } from "./components/Testimonial";

export default function Page() {
  return (
    <>
      <Hero />
      <Features />
      <Projects />
      <AboutUs />
      <Testimonial />
      <GeneralFaq />
      <Booking />
    </>
  );
}
