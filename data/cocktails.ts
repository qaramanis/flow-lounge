import { MenuItem, CocktailCategory } from "@/types/menu";

/**
 * Centralized cocktail data store
 * This file contains all cocktail-related data that can be fetched from multiple sources
 */

/**
 * Signature Cocktails
 */
const signatureCocktails: MenuItem[] = [
  {
    title: "Flow",
    description:
      "Vodka, Chios Mastic, Pomegranate, Maraschino, Passion, Yuzu",
    price: "11.00 €",
  },
  {
    title: "Irish Traveller",
    description: "Whiskey, Apple Sours, Orgeat, Lime, Sugar",
    price: "11.00 €",
  },
  {
    title: "Rum Splash",
    description: "Light Rum, Passion, Passoa, Lime, Elderflower, Splash Soda",
    price: "10.00 €",
  },
  {
    title: "Mandarin Girl",
    description: "Gin, Mandarin, Lemon, Rosemary",
    price: "10.00 €",
  },
  {
    title: "Cucumber Heatwave",
    description: "Tequila Blanco, Triple Sec, Cucumber, Agave, Firewater",
    price: "10.00 €",
  },
  {
    title: "Citrus Serenede",
    description: "Gin, Falernum, Vanilla, Lime, Sugar",
    price: "9.00 €",
  },
  {
    title: "Basil & Berries",
    description: "Gin, Berries, Basil, Lime, Sugar",
    price: "9.00 €",
  },
];

/**
 * Classic Cocktails
 */
const classicCocktails: MenuItem[] = [
  {
    title: "Paloma",
    description: "Tequila Blanco, Agave, Grapefruit, Lime",
    price: "10.00 €",
  },
  {
    title: "Negroni",
    description: "Gin, Campari, Sweet Vermouth",
    price: "11.00 €",
  },
  {
    title: "Zombie",
    description:
      "Blend Rum, Falernum, Triple Sec, Angostura, Lime, Passion, Pineapple",
    price: "11.00 €",
  },
  {
    title: "Old Fashioned",
    description: "Bourbon, Angostura,  Brown Sugar",
    price: "10.00 €",
  },
  {
    title: "Mai Tai",
    description: "Rum Blend, Triple Sec, Orgeat, Lime, Angostura",
    price: "10.00 €",
  },
  {
    title: "Old Fashioned",
    description: "Bourbon, Angostura,  Brown Sugar",
    price: "20.00 €",
  },
  {
    title: "Tommy's Margarita",
    description: "Tequila Reposado, Triple Sec, Agave, Lime",
    price: "9.00 €",
  },
  {
    title: "Pornstar",
    description: "Vodka, Passoa, Vanilla, Passion, Lime",
    price: "9.00 €",
  },
];

/**
 * Aperitifs
 */
const aperitifs: MenuItem[] = [
  {
    title: "Aperol Spritz",
    description: "Αperol, Prosecco, Splash Soda",
    price: "7.00 €",
  },
  {
    title: "Chios Spritz",
    description: "Prosecco, Mastiha, Cucumber, Splash Soda",
    price: "8.00 €",
  },
  {
    title: "Americano",
    description: "Campari, Martini Rosso, Splash Soda / Cherry Soda",
    price: "7.00 €",
  },
  {
    title: "Asti Spritz",
    description: "Moscato D' Asti, Watermelon, Splash Soda",
    price: "7.00 €",
  },
];

/**
 * Mocktails
 */
const mocktails: MenuItem[] = [
  {
    title: "Cucumberita",
    description: "Cucumber, Ginger, Mint, Lime, Splash Soda",
    price: "8.00 €",
  },
  {
    title: "Water Halls",
    description: "Watermelon, Honey, Strawberry, Lime, Splash Soda",
    price: "8.00 €",
  },
  {
    title: "Non-Negroni",
    description: "Gin 0%, Non Alc Vermouth, Teisseire",
    price: "9.00 €",
  },
  {
    title: "Basil & Berries",
    description: "Gin 0%, Berries, Basil, Lime, Sugar",
    price: "8.00 €",
  },
];

/**
 * All cocktail categories
 */
export const cocktailCategories: CocktailCategory[] = [
  {
    name: "Signature Cocktails",
    items: signatureCocktails,
  },
  {
    name: "Classic Cocktails",
    items: classicCocktails,
  },
  {
    name: "Aperitifs",
    items: aperitifs,
  },
  {
    name: "Mocktails",
    items: mocktails,
  },
];

/**
 * Get all cocktails
 */
export const getAllCocktails = (): MenuItem[] => {
  return [
    ...signatureCocktails,
    ...classicCocktails,
    ...aperitifs,
    ...mocktails,
  ];
};

/**
 * Get signature cocktails
 */
export const getSignatureCocktails = (): MenuItem[] => {
  return signatureCocktails;
};

/**
 * Get classic cocktails
 */
export const getClassicCocktails = (): MenuItem[] => {
  return classicCocktails;
};

/**
 * Get aperitifs
 */
export const getAperitifs = (): MenuItem[] => {
  return aperitifs;
};

/**
 * Get mocktails
 */
export const getMocktails = (): MenuItem[] => {
  return mocktails;
};

/**
 * Get all cocktail categories
 */
export const getCocktailCategories = (): CocktailCategory[] => {
  return cocktailCategories;
};

/**
 * Get cocktails by category name
 */
export const getCocktailsByCategory = (
  categoryName: string,
): MenuItem[] | undefined => {
  const category = cocktailCategories.find((cat) => cat.name === categoryName);
  return category?.items;
};
