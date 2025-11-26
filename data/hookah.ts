import { MenuItem, HookahCategory } from "@/types/menu";

/**
 * Centralized hookah data store
 * This file contains all hookah-related data that can be fetched from multiple sources
 */

/**
 * Hookah Items
 */
const hookahItems: MenuItem[] = [
  {
    title: "Classic",
    description:
      "Wide variety of blonde tobacco flavors, recommended for those who are not familiar!",
    price: "In house - 16.00 € \n Refill - 10.00€ \n Bowl to go - 6.00€",
    imageUrl: "/images/hookah/hookah-classic.webp",
  },
  {
    title: "Premium",
    description:
      "Wider range of blonde and dark tobacco varieties, recommended for those who want to experiment and discover new flavors!",
    price: "In house - 20.00 € \n Refill - 12.00€ \n Bowl to go - 7.00€",
    imageUrl: "/images/hookah/hookah-premium.webp",
  },
  {
    title: "Exclusive",
    description:
      "Huge variety of dark tobacco, from Virginia and Burley leaves. An Exclusive experience from start to finish!",
    price: "In house - 26.00 € \n Refill - 16.00€ \n Bowl to go - 9.00€",
    imageUrl: "/images/hookah/hookah-exclusiv.webp",
  },
  {
    title: "Ultra",
    description:
      "Enjoy authentic Hookah with refined tobacco elements and flavor delights, completed with cigar aromas. Recommended for experienced smokers or those seeking heavy hookah smoking in terms of nicotine!",
    price: "In house - 34.00 € \n Refill - 24.00€ \n Bowl to go - 12.00€",
    imageUrl: "/images/hookah/hookah-ultra.webp",
  },
];

/**
 * Special Hookah
 */
const specialHookah: MenuItem[] = [
  {
    title: "Solomon",
    description: "",
    price: "+20.00 €",
    imageUrl: "/images/hookah/hookah-solomon.webp",
  },
  {
    title: "Maklaud Project 22",
    description: "",
    price: "+10.00 €",
    imageUrl: "/images/menu/hookah-maklaud.webp",
  },
  {
    title: "Roden",
    description: "",
    price: "+10.00 €",
    imageUrl: "/images/hookah/hookah-roden.webp",
  },
  {
    title: "Katana",
    description: "",
    price: "+5.00 €",
    imageUrl: "/images/hookah/hookah-katana.webp",
  },
  {
    title: "Oro",
    description: "",
    price: "+5.00 €",
    imageUrl: "/images/hookah/oro.webp",
  },
  {
    title: "Japona",
    description: "",
    price: "+5.00 €",
    imageUrl: "/images/hookah/japona.webp",
  },
];

/**
 * Shisha Cocktail
 */
const shishaCocktail: MenuItem[] = [
  {
    title: "Aperol",
    description: "",
    price: "",
    imageUrl: "/images/menu/hookah-maklaud.webp",
  },
  {
    title: "Citrus Tonic",
    description: "",
    price: "",
    imageUrl: "/images/menu/hookah-maklaud.webp",
  },
];

/**
 * All hookah categories
 */
export const hookahCategories: HookahCategory[] = [
  {
    name: "Hookah",
    items: hookahItems,
  },
  {
    name: "Special Hookah Collection",
    items: specialHookah,
  },
  // {
  //   name: "Shisha Cocktail",
  //   items: shishaCocktail,
  // }, @TODO remove comment later
];

/**
 * Get all hookah items
 */
export const getAllHookahItems = (): MenuItem[] => {
  return hookahItems;
};

/**
 * Get hookah items
 */
export const getHookahItems = (): MenuItem[] => {
  return hookahItems;
};

/**
 * Get all hookah categories
 */
export const getHookahCategories = (): HookahCategory[] => {
  return hookahCategories;
};

/**
 * Get items by category name
 */
export const getHookahByCategory = (
  categoryName: string,
): MenuItem[] | undefined => {
  const category = hookahCategories.find((cat) => cat.name === categoryName);
  return category?.items;
};
