"use-client";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SpecialsButton() {
  const router = useRouter();

  const handleContactRedirect = () => {
    router.push("/contact");
  };

  return (
    <button
      onClick={handleContactRedirect}
      className="flex flex-row bg-accent text-white text-xl md:text-2xl py-2 px-4 pr-2 rounded-full gap-4 items-center hover:scale-105 transition-all duration-500 cursor-pointer group"
    >
      <div>Learn More</div>
      <div className="bg-white  text-background rounded-full p-2 overflow-hidden relative w-9 h-9">
        <div className="absolute inset-0 flex items-center justify-center group-hover:translate-x-20 group-hover:-translate-y-20 transition-all duration-500 ease-in-out">
          <ArrowUpRight size={24} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center -translate-x-20 translate-y-20 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
          <ArrowUpRight size={24} />
        </div>
      </div>
    </button>
  );
}
