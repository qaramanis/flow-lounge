import { MenuItem, WinesCategory } from "@/types/menu";

/**
 * Centralized wines data store
 * This file contains all wine-related data that can be fetched from multiple sources
 */

/**
 * Red Wines
 */
const redWines: MenuItem[] = [
  {
    title: "Lalikos Red",
    description: "Full-bodied red wine with rich dark fruit flavors",
    price: "Glass - 5.00 € \n Bottle - 28.00 €",
  },
  {
    title: "Real Sangria",
    description: "Red",
    price: "Glass - 5.00 €",
  },
];

/**
 * White Wines
 */
const whiteWines: MenuItem[] = [
  {
    title: "Lalikos Jocker White",
    description: "Semi Dry",
    price: "Glass - 5.00 € \n Bottle - 28.00 €",
  },
];

/**
 * Rosé Wines
 */
const roseWines: MenuItem[] = [
  {
    title: "Zitsa",
    description: "Semi Sweet",
    price: "Glass - 4.00 €",
  },
];

/**
 * Sparkling Wines
 */
const sparklingWines: MenuItem[] = [
  {
    title: "Prosecco Doc",
    description: "Light and bubbly Italian sparkling wine with apple notes",
    price: "Glass - 5.50 € \n Bottle - 28.00 €",
  },
  {
    title: "Moscato D'Asti",
    description: "Sweet and lightly sparkling wine with peach and honey notes",
    price: "Glass - 5.50 € \n Bottle - 28.00 €",
  },
];

/**
 * All wine categories
 */
export const wineCategories: WinesCategory[] = [
  {
    name: "Wines",
    items: [...redWines, ...whiteWines, ...roseWines],
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
  return [...redWines, ...whiteWines, ...roseWines, ...sparklingWines];
};

/**
 * Get red wines
 */
export const getRedWines = (): MenuItem[] => {
  return redWines;
};

/**
 * Get white wines
 */
export const getWhiteWines = (): MenuItem[] => {
  return whiteWines;
};

/**
 * Get rosé wines
 */
export const getRoseWines = (): MenuItem[] => {
  return roseWines;
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
