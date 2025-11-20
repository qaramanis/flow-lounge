import { MenuItem, DrinksCategory } from "@/types/menu";

/**
 * Centralized drinks data store
 * This file contains all spirit/drink-related data that can be fetched from multiple sources
 */

/**
 * Vodka
 */
const vodka: MenuItem[] = [
  {
    title: "Smirnoff Red",
    description: "",
    price: "Glass - 7.00 € \n Bottle 0.7 L - 70.00 €",
  },
  {
    title: "Ketel One",
    description: "",
    price: "Glass - 9.00 € \n Bottle 0.7 L - 90.00 €",
  },
  {
    title: "Ciroc",
    description: "",
    price: "Glass - 11.00 € \n Bottle 0.7 L - 110.00 €",
  },
];

/**
 * Rum
 */
const rum: MenuItem[] = [
  {
    title: "Havana 3YO",
    description: "",
    price: "Glass - 7.00 € \n Bottle 0.7 L - 70.00 €",
  },
  {
    title: "Havana Especial",
    description: "",
    price: "Glass - 7.00 € \n Bottle 0.7 L - 70.00 €",
  },
  {
    title: "Sailor Jerry",
    description: "",
    price: "Glass - 9.00 € \n Bottle 0.7 L - 90.00 €",
  },
  {
    title: "Havana 7YO",
    description: "",
    price: "Glass - 9.00 € \n Bottle 0.7 L - 90.00 €",
  },
  {
    title: "Diplomatico Reserva Exclusiva",
    description: "",
    price: "Glass - 11.00 € \n Bottle 0.7 L - 110.00 €",
  },
  {
    title: "Zacapa 23YO",
    description: "",
    price: "Glass - 11.00 € \n Bottle 0.7 L - 110.00 €",
  },
  {
    title: "Cachaca Sagatiba White",
    description: "",
    price: "Glass - 7.00 € \n Bottle 0.7 L - 70.00 €",
  },
];

/**
 * Gin
 */
const gin: MenuItem[] = [
  {
    title: "Beefeater",
    description: "",
    price: "Glass - 7.00 € \n Bottle 0.7 L - 70.00 €",
  },
  {
    title: "Tanqueray",
    description: "",
    price: "Glass - 7.00 € \n Bottle 0.7 L - 70.00 €",
  },
  {
    title: "Tanqueray 0% Alc. Free",
    description: "",
    price: "Glass - 7.00 € \n Bottle 0.7 L - 70.00 €",
  },
  {
    title: "Hendrick's",
    description: "",
    price: "Glass - 11.00 € \n Bottle 0.7 L - 110.00 €",
  },
];

/**
 * Tequila
 */
const tequila: MenuItem[] = [
  {
    title: "Jose Cuervo Yellow",
    description: "",
    price: "Glass - 7.00 € \n Bottle 0.7 L - 70.00 €",
  },
  {
    title: "Jose Cuervo White",
    description: "",
    price: "Glass - 7.00 € \n Bottle 0.7 L - 70.00 €",
  },
  {
    title: "Ocho Blanco",
    description: "",
    price: "Glass - 9.00 € \n Bottle 0.5 L - 90.00 €",
  },
  {
    title: "Ocho Reposado",
    description: "",
    price: "Glass - 9.00 € \n Bottle 0.5 L - 90.00 €",
  },
  {
    title: "Don Julio Blanco",
    description: "",
    price: "Glass - 11.00 € \n Bottle 0.7 L - 110.00 €",
  },
  {
    title: "Don Julio Reposado",
    description: "",
    price: "Glass - 11.00 € \n Bottle 0.7 L - 110.00 €",
  },
];

/**
 * Whiskey
 */
const whiskey: MenuItem[] = [
  {
    title: "Jameson",
    description: "",
    price: "Glass - 7.00 € \n Bottle 0.7 L - 70.00 €",
  },
  {
    title: "Tullamore Dew",
    description: "",
    price: "Glass - 7.00 € \n Bottle 0.7 L - 70.00 €",
  },
  {
    title: "Haig",
    description: "",
    price: "Glass - 7.00 € \n Bottle 0.7 L - 70.00 €",
  },
  {
    title: "Jack Daniel's",
    description: "",
    price: "Glass - 9.00 € \n Bottle 0.7 L - 90.00 €",
  },
  {
    title: "Johnnie Walker Black",
    description: "",
    price: "Glass - 9.00 € \n Bottle 0.7 L - 90.00 €",
  },
  {
    title: "Bulleit Bourbon",
    description: "",
    price: "Glass - 9.00 € \n Bottle 0.7 L - 90.00 €",
  },
  {
    title: "Chivas Regal 12YO",
    description: "",
    price: "Glass - 9.00 € \n Bottle 0.7 L - 90.00 €",
  },
  {
    title: "Teeling Irish Whiskey Single Grain",
    description: "",
    price: "Glass - 11.00 € \n Bottle 0.7 L - 110.00 €",
  },
  {
    title: "Cardhu 12YO",
    description: "",
    price: "Glass - 11.00 € \n Bottle 0.7 L - 110.00 €",
  },
  {
    title: "Talisker 10YO",
    description: "",
    price: "Glass - 11.00 € \n Bottle 0.7 L - 110.00 €",
  },
];

/**
 * Cognac
 */
const cognac: MenuItem[] = [
  {
    title: "Hennessy V.S.",
    description: "",
    price: "Glass - 11.00 € \n Bottle 0.7 L - 110.00 €",
  },
];

/**
 * Metaxa
 */
const metaxa: MenuItem[] = [
  {
    title: "Metaxa 5*",
    description: "",
    price: "Glass - 7.00 € \n Bottle 0.7 L - 70.00 €",
  },
  {
    title: "Metaxa 7*",
    description: "",
    price: "Glass - 9.00 € \n Bottle 0.7 L - 90.00 €",
  },
];

/**
 * Liqueurs
 */
const liqueurs: MenuItem[] = [
  {
    title: "Aperol Aperitivo",
    description: "",
    price: "Glass - 7.00 € \n Bottle 1 L - 70.00 €",
  },
  {
    title: "Apple Sourz",
    description: "",
    price: "Glass - 7.00 € \n Bottle 0.7 L - 70.00 €",
  },
  {
    title: "Campari Bitter",
    description: "",
    price: "Glass - 7.00 € \n Bottle 0.7 L - 70.00 €",
  },
  {
    title: "Jagermeister",
    description: "",
    price: "Glass - 7.00 € \n Bottle 0.7 L - 70.00 €",
  },
  {
    title: "Olmeca Fusion Chocolate",
    description: "",
    price: "Glass - 7.00 € \n Bottle 0.7 L - 70.00 €",
  },
  {
    title: "Mastiha Omiriko (Miss Tic)",
    description: "",
    price: "Glass - 7.00 € \n Bottle 0.7 L - 70.00 €",
  },
  {
    title: "Malibu",
    description: "",
    price: "Glass - 7.00 € \n Bottle 0.7 L - 70.00 €",
  },
  {
    title: "Disaronno Originale",
    description: "",
    price: "Glass - 7.00 € \n Bottle 0.7 L - 70.00 €",
  },
  {
    title: "Baileys",
    description: "",
    price: "Glass - 7.00 € \n Bottle 0.7 L - 70.00 €",
  },
  {
    title: "Martini Bianco",
    description: "",
    price: "Glass - 7.00 € \n Bottle 1 L - 70.00 €",
  },
  {
    title: "Martini Extra Dry",
    description: "",
    price: "Glass - 7.00 € \n Bottle 1 L - 70.00 €",
  },
  {
    title: "Martini Rosso",
    description: "",
    price: "Glass - 7.00 € \n Bottle 1 L - 70.00 €",
  },
];

/**
 * All drink categories
 */
export const drinkCategories: DrinksCategory[] = [
  {
    name: "Vodka",
    items: vodka,
  },
  {
    name: "Gin",
    items: gin,
  },
  {
    name: "Rum",
    items: rum,
  },
  {
    name: "Tequila",
    items: tequila,
  },
  {
    name: "Whiskey",
    items: whiskey,
  },
  {
    name: "Cognac",
    items: cognac,
  },
  {
    name: "Metaxa",
    items: metaxa,
  },
  {
    name: "Liqueurs",
    items: liqueurs,
  },
];

/**
 * Get all drinks
 */
export const getAllDrinks = (): MenuItem[] => {
  return [
    ...vodka,
    ...gin,
    ...rum,
    ...tequila,
    ...whiskey,
    ...cognac,
    ...metaxa,
    ...liqueurs,
  ];
};

/**
 * Get vodka
 */
export const getVodka = (): MenuItem[] => {
  return vodka;
};

/**
 * Get gin
 */
export const getGin = (): MenuItem[] => {
  return gin;
};

/**
 * Get rum
 */
export const getRum = (): MenuItem[] => {
  return rum;
};

/**
 * Get tequila
 */
export const getTequila = (): MenuItem[] => {
  return tequila;
};

/**
 * Get whiskey
 */
export const getWhiskey = (): MenuItem[] => {
  return whiskey;
};

/**
 * Get cognac
 */
export const getCognac = (): MenuItem[] => {
  return cognac;
};

/**
 * Get metaxa
 */
export const getMetaxa = (): MenuItem[] => {
  return metaxa;
};

/**
 * Get liqueurs
 */
export const getLiqueurs = (): MenuItem[] => {
  return liqueurs;
};

/**
 * Get all drink categories
 */
export const getDrinkCategories = (): DrinksCategory[] => {
  return drinkCategories;
};

/**
 * Get drinks by category name
 */
export const getDrinksByCategory = (
  categoryName: string,
): MenuItem[] | undefined => {
  const category = drinkCategories.find((cat) => cat.name === categoryName);
  return category?.items;
};
