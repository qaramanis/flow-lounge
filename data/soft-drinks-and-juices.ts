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
    price: "5.00 €",
  },
];

/**
 * Juices
 */
const juices: MenuItem[] = [
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
    description: "250 ml",
    price: "5.00 €",
  },
  {
    title: "Red Bull Zero",
    description: "250 ml",
    price: "5.00 €",
  },
  {
    title: "Red Bull The Red",
    description: "250 ml",
    price: "5.00 €",
  },
  {
    title: "Coca Cola Classic",
    description: "250 ml",
    price: "4.00 €",
  },
  {
    title: "Coca Cola Zero",
    description: "250 ml",
    price: "4.00 €",
  },
  {
    title: "Pink Grapefruit Soda",
    description: "Three cents - 200 ml",
    price: "4.50 €",
  },
  {
    title: "Cherry Soda",
    description: "Three cents - 200 ml",
    price: "4.50 €",
  },
  {
    title: "Ginger Beer",
    description: "Three cents - 200 ml",
    price: "4.50 €",
  },
  {
    title: "Xino Nero",
    description: "250 ml",
    price: "4.00 €",
  },
  {
    title: "Water Theoni",
    description: "1 Lt",
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
    name: "Juices",
    items: juices,
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
  return [...freshJuices, ...juices, ...softDrinks];
};

/**
 * Get fresh juices
 */
export const getFreshJuices = (): MenuItem[] => {
  return freshJuices;
};

/**
 * Get juices
 */
export const getJuices = (): MenuItem[] => {
  return juices;
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
