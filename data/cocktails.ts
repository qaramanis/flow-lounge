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
    description: "Campari, Disaronno, Raspberry, Cherry Soda",
    price: "10.00 €",
  },
  {
    title: "Irish Traveller",
    description: "Whiskey, Apple Sours, Orgeat, Lime, Sugar",
    price: "10.00 €",
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
    price: "10.00 €",
  },
];

/**
 * Classic Cocktails
 */
const classicCocktails: MenuItem[] = [
  {
    title: "Paloma",
    description: "Tequila Blanco, Agave, Grapefruit, Lime",
    price: "9.00 €",
  },
  {
    title: "Negroni",
    description: "Gin, Campari, Sweet Vermouth",
    price: "10.00 €",
  },
  {
    title: "Boulevandier",
    description: "Campari, Whiskey, Vermouth",
    price: "10.00 €",
  },
  {
    title: "Old Fashioned",
    description: "Bourbon, Angostura, Brown Sugar",
    price: "10.00 €",
  },
  {
    title: "Moscow Mule",
    description: "Vodka, Lime, Ginger Beer",
    price: "10.00 €",
  },
  {
    title: "Espresso Martini",
    description: "Vodka, Espresso, Simple Syrup",
    price: "9.00 €",
  },
  {
    title: "Tom Collins",
    description: "Gin, Lime, Simple Syrup, Mint",
    price: "9.00 €",
  },
  {
    title: "Pornstar",
    description: "Vodka, Vanilla, Passion, Lime",
    price: "9.00 €",
  },
];

/**
 * Spritz
 */
const spritz: MenuItem[] = [
  {
    title: "Aperol Spritz",
    description: "Αperol, Prosecco, Splash Soda",
    price: "7.00 €",
  },
  {
    title: "Flow Spritz",
    description: "Disaronno, Tangerine, Pink Grapefruit",
    price: "7.00 €",
  },
  {
    title: "Americano Spritz",
    description: "Campari, Martini Rosso, Splash / Cherry Soda",
    price: "7.00 €",
  },
];

/**
 * Mocktails
 */
const mocktails: MenuItem[] = [
  {
    title: "Watermelon Halls",
    description: "Watermelon, Honey, Strawberry, Lime, Splash Soda",
    price: "7.00 €",
  },
  {
    title: "Non-Negroni",
    description: "Gin 0%, Non Alc Vermouth, Teisseire",
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
    name: "All Time Classic",
    items: classicCocktails,
  },
  {
    name: "Spritz",
    items: spritz,
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
  return [...signatureCocktails, ...classicCocktails, ...spritz, ...mocktails];
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
 * Get spritz
 */
export const getSpritz = (): MenuItem[] => {
  return spritz;
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
