import HeroSection from "@/components/landing/hero/hero";
import ElectricBorder from "@/components/react-bits/electric-border";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <div className="fixed top-[1rem] left-[1rem] z-101">
        <ElectricBorder
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
        </ElectricBorder>
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Additional sections will go here */}
    </div>
  );
}
