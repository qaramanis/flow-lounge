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
    title: "Smirnoff",
    description: "",
    price: "Glass - 8.00 € \n Bottle - 80.00 €",
  },
  {
    title: "Ketel One",
    description: "",
    price: "Glass - 9.00 € \n Bottle - 90.00 €",
  },
  {
    title: "Ciroc",
    description: "",
    price: "Glass - 11.00 € \n Bottle - 110.00 €",
  },
  {
    title: "Belvedere",
    description: "",
    price: "Glass - 12.00 € \n Bottle - 120.00 €",
  },
  {
    title: "Grey Goose",
    description: "",
    price: "Glass - 13.00 € \n Bottle - 130.00 €",
  },
];

/**
 * Gin
 */
const gin: MenuItem[] = [
  {
    title: "Tanqueray",
    description: "",
    price: "Glass - 8.00 € \n Bottle - 80.00 €",
  },
  {
    title: "Tanqueray Ten",
    description: "",
    price: "Glass - 10.00 € \n Bottle - 100.00 €",
  },
  {
    title: "The Botanist",
    description: "",
    price: "Glass - 12.00 € \n Bottle - 120.00 €",
  },
  {
    title: "Hendricks",
    description: "",
    price: "Glass - 13.00 € \n Bottle - 130.00 €",
  },
  {
    title: "Tanqueray Zero",
    description: "",
    price: "Glass - 8.00 € \n Bottle - 80.00 €",
  },
];

/**
 * Rum
 */
const rum: MenuItem[] = [
  {
    title: "Pampero Blanco",
    description: "",
    price: "Glass - 8.00 € \n Bottle - 80.00 €",
  },
  {
    title: "Pampero Especial",
    description: "",
    price: "Glass - 8.00 € \n Bottle - 80.00 €",
  },
  {
    title: "Havana Club Anejo Reserva",
    description: "",
    price: "Glass - 9.00 € \n Bottle - 90.00 €",
  },
  {
    title: "Havana Club 7 Years Old",
    description: "",
    price: "Glass - 10.00 € \n Bottle - 100.00 €",
  },
  {
    title: "Diplomatico Reserva",
    description: "",
    price: "Glass - 14.00 € \n Bottle - 140.00 €",
  },
  {
    title: "Zacapa",
    description: "",
    price: "Glass - 14.00 € \n Bottle - 140.00 €",
  },
];

/**
 * Tequila
 */
const tequila: MenuItem[] = [
  {
    title: "Don Julio Blanco",
    description: "",
    price: "Glass - 12.00 € \n Bottle - 120.00 €",
  },
  {
    title: "Don Julio Reposado",
    description: "",
    price: "Glass - 13.00 € \n Bottle - 130.00 €",
  },
  {
    title: "Mezcal Amaras",
    description: "",
    price: "Glass - 13.00 € \n Bottle - 130.00 €",
  },
];

/**
 * Whisky
 */
const whisky: MenuItem[] = [
  {
    title: "Jameson",
    description: "",
    price: "Glass - 8.00 € \n Bottle - 80.00 €",
  },
  {
    title: "Talisker",
    description: "",
    price: "Glass - 9.50 € \n Bottle - 95.00 €",
  },
  {
    title: "Roe & Co",
    description: "",
    price: "Glass - 9.00 € \n Bottle - 90.00 €",
  },
  {
    title: "Chivas 12",
    description: "",
    price: "Glass - 9.00 € \n Bottle - 90.00 €",
  },
  {
    title: "Cardhu 12",
    description: "",
    price: "Glass - 9.00 € \n Bottle - 90.00 €",
  },
  {
    title: "JW Black Label",
    description: "",
    price: "Glass - 9.00 € \n Bottle - 90.00 €",
  },
  {
    title: "Bullet Bourbon",
    description: "",
    price: "Glass - 9.00 € \n Bottle - 90.00 €",
  },
];

/**
 * Cognac
 */
const cognac: MenuItem[] = [
  {
    title: "Hennessy",
    description: "",
    price: "Glass - 9.00 € \n Bottle - 90.00 €",
  },
];

/**
 * Metaxa
 */
const metaxa: MenuItem[] = [
  {
    title: "Metaxa 5*",
    description: "",
    price: "Glass - 8.00 € \n Bottle - 80.00 €",
  },
  {
    title: "Metaxa 7*",
    description: "",
    price: "Glass - 9.00 € \n Bottle - 90.00 €",
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
    name: "Whisky",
    items: whisky,
  },
  {
    name: "Cognac",
    items: cognac,
  },
  {
    name: "Metaxa",
    items: metaxa,
  },
];

/**
 * Get all drinks
 */
export const getAllDrinks = (): MenuItem[] => {
  return [...vodka, ...gin, ...rum, ...tequila, ...whisky, ...cognac, ...metaxa];
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
 * Get whisky
 */
export const getWhisky = (): MenuItem[] => {
  return whisky;
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
