"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Event {
  id: string;
  number: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

const events: Event[] = [
  {
    id: "01",
    number: "01",
    title: "Φεστιβάλ Εμπειρίας",
    description:
      "Το πρώτο Φεστιβάλ (εμπειρίας) στην Ελλάδα. Μια εμπειρία που θα ενώσει όλο το Community του nαργιλe. Ετοιμαστείτε για ένα αξέχαστο 3ήμερο!",
    date: "26, 27 και 28 Σεπτεμβρίου",
    image: "/flow-lounge.svg",
  },
  {
    id: "02",
    number: "02",
    title: "Cocktail Essentials",
    description:
      "Σας προσκαλούμε σε ένα μοναδικό καλοκαιρινό Cocktail Party με δροσιστικά signature drinks, εκρηκτικά vibes και τις μουσικές επιλογές του DJ Adam.",
    date: "Τετάρτη 9 Ιουλίου",
    image: "/flow-lounge.svg",
  },
  {
    id: "03",
    number: "03",
    title: "CloudZ Open Party",
    description:
      "Special Cocktails & Degustation καθώς και House Beats από Dj Billakos. Σας περιμένουμε όλους για μια αξέχαστη βραδιά! ",
    date: "Παρασκευή 9 Μαίου ",
    image: "/flow-lounge.svg",
  },
];

function EventCard({ event, index }: { event: Event; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleEventsRedirect = () => {
    router.push("/events");
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="flex flex-col md:flex-row gap-6 group cursor-pointer items-center justify-between pb-8 border-b border-foreground/15"
      onClick={handleEventsRedirect}
    >
      <div className="hidden md:block text-5xl md:text-6xl font-light text-foreground min-w-[80px]">
        {event.number}.
      </div>

      <div className="hidden md:block size-20 md:size-64 rounded-2xl overflow-hidden mx-[2rem] flex-shrink-0 bg-transparent">
        <Image
          src={event.image}
          alt={event.title}
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col gap-x-4">
          <h3 className="text-2xl md:text-3xl font-medium mb-2 transition-colors duration-300">
            {event.title}
          </h3>
          <h3 className="text-lg md:text-xl font-medium text-foreground/75 mb-2 transition-colors duration-300">
            {event.date}
          </h3>
        </div>

        <p className="text-base md:text-lg text-foreground/50 leading-relaxed md:max-w-1/2">
          {event.description}
        </p>
      </div>

      <div className="md:hidden size-32 rounded-2xl overflow-hidden mx-[2rem] flex-shrink-0 bg-transparent">
        <Image
          src={event.image}
          alt={event.title}
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Arrow Button */}
      <div className="hidden md:block">
        <button className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-black flex items-center justify-center group-hover:bg-accent transition-all duration-300 group-hover:scale-110">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function EventsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <section
      ref={containerRef}
      className="py-20 lg:py-32 lg:px-20 bg-transparent"
      id="events"
    >
      <div className="md:px-[6rem] px-[2rem]  mx-auto">
        <div className="flex flex-col space-y-10 lg:space-y-16 items-center md:items-stretch">
          <div className="space-y-6 flex flex-col md:flex-row justify-between items-center border-b border-foreground/15 pb-12">
            <h2
              ref={titleRef}
              className="text-5xl md:text-6xl leading-tight text-foreground text-center md:text-start"
            >
              Keep Up With <br />
              Our{" "}
              <a className="self-center text-6xl md:text-[9.5rem] font-echelon italic text-accent">
                Events
              </a>
            </h2>
          </div>

          <div className="space-y-10 lg:space-y-16">
            {events.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
