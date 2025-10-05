"use client";

import { useRef } from "react";

import MenuCard from "@/components/menu/card";

export default function HookahPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const signatureCocktails = [
    {
      title: "Flow",
      description:
        "Vodka, Chios Mastic, Pomegranate, Maraschino, Passion, Yuzu",
      // imageUrl: "",
      price: "11.00 €",
    },
    {
      title: "Irish Traveller",
      description: "Whiskey, Apple Sours, Orgeat, Lime, Sugar",
      // imageUrl: "",
      price: "11.00 €",
    },
    {
      title: "Rum Splash",
      description: "Light Rum, Passion, Passoa, Lime, Elderflower, Splash Soda",
      // imageUrl: "",
      price: "10.00 €",
    },
    {
      title: "Mandarin Girl",
      description: "Gin, Mandarin, Lemon, Rosemary",
      // imageUrl: "",
      price: "10.00 €",
    },
    {
      title: "Cucumber Heatwave",
      description: "Tequila Blanco, Triple Sec, Cucumber, Agave, Firewater",
      // imageUrl: "",
      price: "10.00 €",
    },
    {
      title: "Citrus Serenede",
      description: "Gin, Falernum, Vanilla, Lime, Sugar",
      // imageUrl: "",
      price: "9.00 €",
    },
    {
      title: "Basil & Berries",
      description: "Gin, Berries, Basil, Lime, Sugar",
      // imageUrl: "",
      price: "9.00 €",
    },
  ];

  const classicCocktails = [
    {
      title: "Paloma",
      description: "Tequila Blanco, Agave, Grapefruit, Lime",
      // imageUrl: "",
      price: "10.00 €",
    },
    {
      title: "Negroni",
      description: "Gin, Campari, Sweet Vermouth",
      // imageUrl: "",
      price: "11.00 €",
    },
    {
      title: "Zombie",
      description:
        "Blend Rum, Falernum, Triple Sec, Angostura, Lime, Passion, Pineapple",
      // imageUrl: "",
      price: "11.00 €",
    },
    {
      title: "Old Fashioned",
      description: "Bourbon, Angostura,  Brown Sugar",
      // imageUrl: "",
      price: "10.00 €",
    },
    {
      title: "Mai Tai",
      description: "Rum Blend, Triple Sec, Orgeat, Lime, Angostura",
      // imageUrl: "",
      price: "10.00 €",
    },
    {
      title: "Old Fashioned",
      description: "Bourbon, Angostura,  Brown Sugar",
      // imageUrl: "",
      price: "20.00 €",
    },
    {
      title: "Tommy’s Margarita",
      description: "Tequila Reposado, Triple Sec, Agave, Lime",
      // imageUrl: "",
      price: "9.00 €",
    },
    {
      title: "Pornstar",
      description: "Vodka, Passoa, Vanilla, Passion, Lime",
      // imageUrl: "",
      price: "9.00 €",
    },
  ];

  const aperitifs = [
    {
      title: "Aperol Spritz",
      description: "Αperol, Prosecco, Splash Soda",
      // imageUrl: "",
      price: "7.00 €",
    },
    {
      title: "Chios Spritz",
      description: "Prosecco, Mastiha, Cucumber, Splash Soda",
      // imageUrl: "",
      price: "8.00 €",
    },
    {
      title: "Americano",
      description: "Campari, Martini Rosso, Splash Soda / Cherry Soda",
      // imageUrl: "",
      price: "7.00 €",
    },
    {
      title: "Asti Spritz",
      description: "Moscato D’ Asti, Watermelon, Splash Soda",
      // imageUrl: "",
      price: "7.00 €",
    },
  ];

  const mocktails = [
    {
      title: "Cucumberita",
      description: "Cucumber, Ginger, Mint, Lime, Splash Soda",
      // imageUrl: "",
      price: "8.00 €",
    },
    {
      title: "Water Halls",
      description: "Watermelon, Honey, Strawberry, Lime, Splash Soda",
      // imageUrl: "",
      price: "8.00 €",
    },
    {
      title: "Non-Negroni",
      description: "Gin 0%, Non Alc Vermouth, Teisseire",
      // imageUrl: "",
      price: "9.00 €",
    },
    {
      title: "Basil & Berries",
      description: "Gin 0%, Berries, Basil, Lime, Sugar",
      // imageUrl: "",
      price: "8.00 €",
    },
  ];

  return (
    <div ref={containerRef} className="pt-32 px-8 md:px-20 mb-12">
      <h1
        ref={titleRef}
        className="text-5xl md:text-7xl font-light tracking-tighter text-white mb-24"
      >
        Our{" "}
        <a className="text-accent font-echelon italic text-6xl md:text-9xl">
          Cocktail
        </a>{" "}
        List
      </h1>

      {/* Signature Cocktails */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-16 md:mt-36">
        <h1 className="text-5xl md:text-7xl">Signature Cocktails</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-6 lg:gap-8"
      >
        {signatureCocktails.map((cocktail, index) => (
          <div key={index} className="w-full md:w-[calc(23%-1.5rem)]">
            <MenuCard
              title={cocktail.title}
              description={cocktail.description}
              // imageUrl={cocktail.imageUrl}
              price={cocktail.price}
            />
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent my-24" />

      {/* Classic Cocktails */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-12 md:mt-12">
        <h1 className="text-5xl md:text-7xl">Classic Cocktails</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-6 lg:gap-8"
      >
        {classicCocktails.map((cocktail, index) => (
          <div key={index} className="w-full md:w-[calc(23%-1.5rem)]">
            <MenuCard
              key={index}
              title={cocktail.title}
              description={cocktail.description}
              // imageUrl={cocktail.imageUrl}
              price={cocktail.price}
            />
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent my-24" />

      {/* Aperitifs */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-12 md:mt-12">
        <h1 className="text-5xl md:text-7xl">Aperitifs</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-6 lg:gap-8"
      >
        {aperitifs.map((aperitif, index) => (
          <div key={index} className="w-full md:w-[calc(23%-1.5rem)]">
            <MenuCard
              key={index}
              title={aperitif.title}
              description={aperitif.description}
              // imageUrl={aperitif.imageUrl}
              price={aperitif.price}
            />
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent my-24" />

      {/* Mocktails */}
      <div className="self-center items-center text-center mb-8 mt-24 md:mb-12 md:mt-12">
        <h1 className="text-5xl md:text-7xl">Mocktails</h1>
      </div>
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-6 lg:gap-8"
      >
        {mocktails.map((mocktail, index) => (
          <div key={index} className="w-full md:w-[calc(23%-1.5rem)]">
            <MenuCard
              key={index}
              title={mocktail.title}
              description={mocktail.description}
              // imageUrl={mocktail.imageUrl}
              price={mocktail.price}
            />
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="text-white/60 mb-4">
          All prices listed above include vat 24% and municipal taxes 0.5%
          <br />
          Market Law Health Officer: Kyriakos Katikaridis
        </p>
      </div>
    </div>
  );
}
