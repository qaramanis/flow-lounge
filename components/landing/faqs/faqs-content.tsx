"use client";

import { useState } from "react";
import { ChevronsDown, Minus } from "lucide-react";

interface FAQ {
  question: string;
  answer: {
    description?: string;
    items?: string[];
  };
}

const faqs: FAQ[] = [
  {
    question: "Which Hookah Flavours do you have?",
    answer: {
      description:
        "We offer more than 200 unique flavours to choose from. Our extensive collection includes a wide range of popular and exotic flavours, catering to diverse tastes and preferences. Ask our Hookah Master to check which ones are available.",
    },
  },
  {
    question: "Which Beers are available?",
    answer: {
      description:
        "We have a wide variety of beers available, including IPAs, Stouts, Lagers and more. Our suggestions are:",
      items: [
        "Ali Ipa",
        "Marmita Red Ale",
        "Blame the Sun Beach Bum",
        "Surmena Raspberry Shower",
      ],
    },
  },
];

export default function FaqsContent() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col md:max-w-[50%] gap-[1rem]">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="text-lg bg-accent hover:bg-accent/85 rounded-md p-[1rem] cursor-pointer transition-all duration-300"
          onClick={() => toggleExpanded(index)}
        >
          <div className="flex flex-row justify-between items-center gap-4 ">
            <h2 className="text-3xl text-foreground max-w-[85%]">
              {faq.question}
            </h2>
            <ChevronsDown
              className={`text-foreground transition-transform duration-300 w-8 h-8 md:w-6 md:h-6 ${expandedIndex === index ? "-rotate-180" : ""}
              `}
            />
          </div>
          <div
            className={`text-foreground max-w-[75%] overflow-hidden transition-all ${
              expandedIndex === index
                ? "max-h-[500px] opacity-100 pt-[0.5rem] duration-300 ease-in"
                : "max-h-0 opacity-0 py-0 duration-300 ease-out"
            }`}
          >
            {faq.answer.description && <p>{faq.answer.description}</p>}
            {faq.answer.items && faq.answer.items.length > 0 && (
              <div className="flex flex-col gap-[0.5rem] pt-[1rem]">
                {faq.answer.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <div className="flex flex-row items-center">
                      <Minus
                        className="mr-2 mt-[0.5px] text-foreground"
                        size={16}
                      />{" "}
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
