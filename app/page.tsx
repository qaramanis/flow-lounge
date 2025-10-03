import EventsSection from "@/components/landing/events/events";
import HeroSection from "@/components/landing/hero/hero";
import JoinSection from "@/components/landing/join/join";
import MarqueesSection from "@/components/landing/marquees/marquees";
import TestimonialsSection from "@/components/landing/testimonial/testimonial";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      <TestimonialsSection />
      <MarqueesSection />
      <EventsSection />
      <JoinSection />
    </div>
  );
}
