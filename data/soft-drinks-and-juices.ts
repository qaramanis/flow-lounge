import { MenuItem, SoftDrinksAndJuicesCategory } from "@/types/menu";

/**
 * Centralized soft drinks and juices data store
 * This file contains all soft drink and juice-related data that can be fetched from multiple sources
 */

/**
 * Fresh Juices
 */
const freshJuices: MenuItem[] = [
  {
    title: "Orange Juice",
    description: "",
    price: "4.50 €",
  },
];

/**
 * Packaged Juices
 */
const packagedJuices: MenuItem[] = [
  {
    title: "Orange Juice",
    description: "",
    price: "3.50 €",
  },
  {
    title: "Pineapple",
    description: "",
    price: "3.50 €",
  },
  {
    title: "Peach",
    description: "",
    price: "3.50 €",
  },
  {
    title: "Cherry",
    description: "",
    price: "3.50 €",
  },
  {
    title: "Banana",
    description: "",
    price: "3.50 €",
  },
  {
    title: "Strawberry",
    description: "",
    price: "3.50 €",
  },
];

/**
 * Soft Drinks
 */
const softDrinks: MenuItem[] = [
  {
    title: "Red Bull Classic",
    description: "",
    price: "5.00 €",
  },
  {
    title: "Red Bull Zero",
    description: "",
    price: "5.00 €",
  },
  {
    title: "Coca Cola Classic",
    description: "",
    price: "3.50 €",
  },
  {
    title: "Coca Cola Zero",
    description: "",
    price: "3.50 €",
  },
  {
    title: "Fanta Orange",
    description: "",
    price: "3.50 €",
  },
  {
    title: "Fanta Lemon",
    description: "",
    price: "3.50 €",
  },
  {
    title: "Fanta Exotic",
    description: "",
    price: "4.50 €",
  },
  {
    title: "Grapefruit Soda",
    description: "",
    price: "4.50 €",
  },
  {
    title: "Xino Nero",
    description: "",
    price: "3.50 €",
  },
  {
    title: "Water Theoni",
    description: "1.5Lt",
    price: "2.00 €",
  },
];

/**
 * All soft drinks and juices categories
 */
export const softDrinksAndJuicesCategories: SoftDrinksAndJuicesCategory[] = [
  {
    name: "Fresh Juices",
    items: freshJuices,
  },
  {
    name: "Packaged Juices",
    items: packagedJuices,
  },
  {
    name: "Soft Drinks",
    items: softDrinks,
  },
];

/**
 * Get all soft drinks and juices
 */
export const getAllSoftDrinksAndJuices = (): MenuItem[] => {
  return [...freshJuices, ...packagedJuices, ...softDrinks];
};

/**
 * Get fresh juices
 */
export const getFreshJuices = (): MenuItem[] => {
  return freshJuices;
};

/**
 * Get packaged juices
 */
export const getPackagedJuices = (): MenuItem[] => {
  return packagedJuices;
};

/**
 * Get soft drinks
 */
export const getSoftDrinks = (): MenuItem[] => {
  return softDrinks;
};

/**
 * Get all soft drinks and juices categories
 */
export const getSoftDrinksAndJuicesCategories =
  (): SoftDrinksAndJuicesCategory[] => {
    return softDrinksAndJuicesCategories;
  };

/**
 * Get items by category name
 */
export const getSoftDrinksAndJuicesByCategory = (
  categoryName: string,
): MenuItem[] | undefined => {
  const category = softDrinksAndJuicesCategories.find(
    (cat) => cat.name === categoryName,
  );
  return category?.items;
};
