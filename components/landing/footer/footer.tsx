"use client";

import Link from "next/link";
import { JSX, useState } from "react";

interface FooterLink {
  label: string;
  href: string;
  isNew?: boolean;
  isExternal?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerData: FooterColumn[] = [
  {
    title: "Εμπειρία",
    links: [
      { label: "Hookah", href: "#", isExternal: false },
      { label: "Deals & Offers", href: "#", isExternal: false },
    ],
  },
  {
    title: "Επισκεφτείτε μας",
    links: [
      { label: "Η Ιστορία μας", href: "#", isExternal: false },
      {
        label: "Γίνε μέλος της ομάδας",
        href: "#",
        isNew: false,
        isExternal: false,
      },
      { label: "Flow Events", href: "/events", isExternal: false },
    ],
  },
  {
    title: "Υπηρεσίες",
    links: [
      { label: "Για Events", href: "/services/events", isExternal: false },
      {
        label: "Για Συνεργάτες",
        href: "/services/partners",
        isExternal: false,
      },
      {
        label: "Για Επιχειρήσεις",
        href: "/services/business",
        isExternal: false,
      },
    ],
  },
  {
    title: "Socials",
    links: [
      {
        label: "Instagram",
        href: "https://instagram.com/flowlounge",
        isExternal: true,
      },
    ],
  },
  {
    title: "Υποστήριξη",
    links: [
      { label: "Όροι", href: "/terms", isExternal: false },
      { label: "Πολιτική Απορρήτου", href: "/privacy", isExternal: false },
    ],
  },
];

const SocialIcon = ({ platform }: { platform: string }) => {
  const icons: { [key: string]: JSX.Element } = {
    instagram: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
        <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" />
        <circle cx="18.406" cy="5.594" r="1.44" />
      </svg>
    ),
  };

  return icons[platform] || null;
};

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle newsletter submission
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="relative bg-foreground rounded-t-[40px] mt-auto">
      <div className="px-8 md:px-20 pt-12 pb-10">
        <h2
          className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter pb-16 bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(to right, black, #EF5021, black, #EF5021, black, #EF5021, black)",
            backgroundSize: "200% 100%",
            animation: "gradientPulse 20s ease-in-out infinite",
          }}
        >
          FLOW LOUNGE
        </h2>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {footerData.map((column, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-background">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#666666] hover:text-[#EF5021] transition-all duration-300 inline-flex items-center gap-2"
                    >
                      {link.label}
                      {link.isNew && (
                        <span className="text-[10px] bg-gradient-to-bl from-background/95 to-[#EF5021] text-white px-2 py-0.5 rounded font-semibold">
                          New!
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-background">
              Μείνε Ενημερωμένος
            </h3>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="flex-1 px-5 py-3 border-2 border-gray-200 rounded-full text-background text-sm focus:outline-none focus:border-[#EF5021] transition-colors duration-300 ease-in-out bg-transparent"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-[#EF5021] to-[#ff6b3d] text-white rounded-full text-sm font-semibold hover:scale-105 hover:shadow-lg hover:shadow-[#EF5021]/30 transition-all duration-300"
              >
                Join
              </button>
            </form>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {["instagram"].map((platform) => (
                <Link
                  key={platform}
                  href={`https://${platform}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-black hover:bg-gradient-to-r hover:bg-[#EF5021] transition-all duration-300"
                  aria-label={platform}
                >
                  <SocialIcon platform={platform} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-[#666666] text-center md:text-left">
            © 2025 FLOW LOUNGE
            <br />
            ALL RIGHTS RESERVED
          </div>
          <div className="text-xs text-[#666666] text-center md:text-left">
            created with ❤️ by{" "}
            <Link
              href="https://qaramanis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-all ease-in-out duration-300"
            >
              qaramanis
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
