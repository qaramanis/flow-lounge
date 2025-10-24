import { MenuItem, BeersAndCidersCategory } from "@/types/menu";

/**
 * Centralized beers and ciders data store
 * This file contains all beer and cider-related data that can be fetched from multiple sources
 */

/**
 * Beers
 */
const beers: MenuItem[] = [
  {
    title: "Ali Pilsner Draft",
    description: "400ml",
    price: "5.00 €",
  },
  {
    title: "Stella",
    description: "330ml",
    price: "5.50 €",
  },
  {
    title: "Corona",
    description: "330ml",
    price: "5.50 €",
  },
  {
    title: "Ali Ipa",
    description: "330ml",
    price: "5.50 €",
  },
  {
    title: "Marmita Red Ale",
    description: "330ml",
    price: "5.50 €",
  },
  {
    title: "Blame the Sun Beach Bum",
    description: "330ml",
    price: "6.50 €",
  },
  {
    title: "Franziskaner Weissbier",
    description: "500ml",
    price: "6.50 €",
  },
  {
    title: "Surmena Raspberry Shower",
    description: "500ml",
    price: "9.00 €",
  },
  {
    title: "Radler",
    description: "330ml",
    price: "5.00 €",
  },
  {
    title: "Stella No Alcohol",
    description: "330ml",
    price: "5.00 €",
  },
];

/**
 * Ciders
 */
const ciders: MenuItem[] = [
  {
    title: "Milokleftis",
    description: "",
    price: "5.00 €",
  },
];

/**
 * All beers and ciders categories
 */
export const beersAndCidersCategories: BeersAndCidersCategory[] = [
  {
    name: "Beers",
    items: beers,
  },
  {
    name: "Ciders",
    items: ciders,
  },
];

/**
 * Get all beers and ciders
 */
export const getAllBeersAndCiders = (): MenuItem[] => {
  return [...beers, ...ciders];
};

/**
 * Get beers
 */
export const getBeers = (): MenuItem[] => {
  return beers;
};

/**
 * Get ciders
 */
export const getCiders = (): MenuItem[] => {
  return ciders;
};

/**
 * Get all beers and ciders categories
 */
export const getBeersAndCidersCategories = (): BeersAndCidersCategory[] => {
  return beersAndCidersCategories;
};

/**
 * Get items by category name
 */
export const getBeersAndCidersByCategory = (
  categoryName: string,
): MenuItem[] | undefined => {
  const category = beersAndCidersCategories.find(
    (cat) => cat.name === categoryName,
  );
  return category?.items;
};
