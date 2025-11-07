"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { PhoneOutgoing, Mail, Phone } from "lucide-react";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import ContactForm from "@/components/contact/contact-form";
import ReservationForm from "@/components/contact/reservation-form";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power3.out" },
      );

      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: "power3.out" },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-24 px-6 md:px-16 pb-16">
      <div className="mb-10">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-light tracking-tighter text-white mb-5"
        >
          Get in{" "}
          <span className="text-accent font-echelon italic text-6xl md:text-8xl drop-shadow-[0_0_32px_rgba(239,80,33,0.8)]">
            Touch
          </span>
        </h1>
        <p className="text-lg text-white/80 max-w-3xl">
          Reach out to us for reservations, inquiries, or anything else you
          need.
        </p>
      </div>

      {/* Contact Information */}
      <div ref={contentRef} className="space-y-6 max-w-4xl mb-12">
        <div className="border-b border-white/15 pb-5">
          <h2 className="text-lg text-white/60 mb-1.5">Name</h2>
          <p className="text-2xl text-white font-light">Titto Peronetti</p>
        </div>

        <div className="border-b border-white/15 pb-5">
          <h2 className="text-lg text-white/60 mb-1.5">Phone</h2>
          <a
            href="tel:+30"
            className="text-2xl text-white font-light hover:text-accent transition-colors duration-300 group flex flex-row justify-start items-center gap-4"
          >
            {/*+30 697 208 4941*/}
            +30 697 683 9487
            <PhoneOutgoing
              size={20}
              className="opacity-50 group-hover:opacity-100 transition-all duration-300"
            />
          </a>
        </div>

        <div className="border-b border-white/15 pb-5">
          <h2 className="text-lg text-white/60 mb-1.5">Email</h2>
          <a
            href="mailto:info@flowlounge.gr"
            className="text-2xl text-white font-light hover:text-accent transition-colors duration-300 group flex flex-row justify-start items-center gap-4"
          >
            info@flowlounge.gr
            <Mail
              size={22}
              className="opacity-50 group-hover:opacity-100 transition-all duration-300 -mb-1"
            />
            {/*@TODO add new mail*/}
          </a>
        </div>
      </div>

      <div
        ref={formRef}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12"
      >
        <ContactForm />
        <ReservationForm />
      </div>
    </div>
  );
}
