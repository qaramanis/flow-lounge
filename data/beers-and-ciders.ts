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
    price: "5.50 €",
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
    title: "Kyria Toula New England Ipa",
    description: "330ml",
    price: "7.50 €",
  },
  {
    title: "Bella Pilsner",
    description: "330ml",
    price: "6.50 €",
  },
  {
    title: "Beach Bum Tropic Ale",
    description: "330ml",
    price: "7.00 €",
  },
  {
    title: "Vergina Weiss",
    description: "500ml",
    price: "5.50 €",
  },
  {
    title: "Crispy Pils",
    description: "440ml",
    price: "8.00 €",
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
    description: "330ml",
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
