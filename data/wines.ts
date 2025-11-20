import { MenuItem, WinesCategory } from "@/types/menu";

/**
 * Centralized wines data store
 * This file contains all wine-related data that can be fetched from multiple sources
 */

/**
 * Wines
 */
const wines: MenuItem[] = [
  {
    title: "Monemvasia Voltes White",
    description: "",
    price: "Glass - 5.50 € \n Bottle - 24.00 €",
  },
  {
    title: "Rocca Ventosa Pinot Grigio White",
    description: "",
    price: "Bottle - 25.00 €",
  },
  {
    title: "Monemvasia Voltes Red",
    description: "",
    price: "Glass - 5.50 € \n Bottle - 24.00 €",
  },
  {
    title: "Zacharias Agioritiko Red",
    description: "",
    price: "Glass - 5.50 € \n Bottle - 24.00 €",
  },
  {
    title: "Red Elephant Merlot",
    description: "",
    price: "Bottle - 27.00 €",
  },
  {
    title: "Ploes Roze",
    description: "",
    price: "Glass - 5.50 € \n Bottle - 23.00 €",
  },
];

/**
 * Sangria
 */
const sangria: MenuItem[] = [
  {
    title: "Real Sagria",
    description: "",
    price: "Glass - 5.00 €",
  },
];

/**
 * Sparkling Wines
 */
const sparklingWines: MenuItem[] = [
  {
    title: "Moscato Dasti Leggenda",
    description: "",
    price: "Glass - 5.50 € \n Bottle - 30.00 €",
  },
  {
    title: "Scanavino Prosecco White",
    description: "",
    price: "Glass - 6.00 € \n Bottle - 29.00 €",
  },
];

/**
 * All wine categories
 */
export const wineCategories: WinesCategory[] = [
  {
    name: "Wines",
    items: wines,
  },
  {
    name: "Sangria",
    items: sangria,
  },
  {
    name: "Sparkling Wines",
    items: sparklingWines,
  },
];

/**
 * Get all wines
 */
export const getAllWines = (): MenuItem[] => {
  return [...wines, ...sangria, ...sparklingWines];
};

/**
 * Get wines
 */
export const getWines = (): MenuItem[] => {
  return wines;
};

/**
 * Get sangria
 */
export const getSangria = (): MenuItem[] => {
  return sangria;
};

/**
 * Get sparkling wines
 */
export const getSparklingWines = (): MenuItem[] => {
  return sparklingWines;
};

/**
 * Get all wine categories
 */
export const getWineCategories = (): WinesCategory[] => {
  return wineCategories;
};

/**
 * Get wines by category name
 */
export const getWinesByCategory = (
  categoryName: string,
): MenuItem[] | undefined => {
  const category = wineCategories.find((cat) => cat.name === categoryName);
  return category?.items;
};
