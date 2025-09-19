import ElectricBorder from "@/components/react-bits/electric-border";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-dvh overflow-hidden p-[2rem] flex justify-center items-start">
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
          width={100}
          height={100}
          className="rounded-full"
        />
      </ElectricBorder>
    </div>
  );
}
