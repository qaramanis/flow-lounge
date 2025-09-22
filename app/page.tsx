import EventsSection from "@/components/landing/events/events";
import Footer from "@/components/landing/footer/footer";
import HeroSection from "@/components/landing/hero/hero";
import MarqueesSection from "@/components/landing/marquees/marquees";
import TestimonialsSection from "@/components/landing/testimonial/testimonial";
// import ElectricBorder from "@/components/react-bits/electric-border";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="fixed top-[1rem] left-[1rem] z-101">
        <Image
          src="/flow-lounge.svg"
          alt="Logo"
          width={80}
          height={80}
          className="rounded-full"
        />
        {/*<ElectricBorder
          color="#EF5021"
          speed={1}
          chaos={1}
          thickness={2}
          className="rounded-full bg-transparent"
        >
          <Image
            src="/flow-lounge.svg"
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
        </ElectricBorder>*/}
      </div>

      <HeroSection />
      <TestimonialsSection />
      <MarqueesSection />
      <EventsSection />
      <Footer />
    </div>
  );
}
