import { MenuItem, HookahCategory } from "@/types/menu";

/**
 * Centralized hookah data store
 * This file contains all hookah-related data that can be fetched from multiple sources
 */

/**
 * Hookah Categories
 */
const hookahCategories: MenuItem[] = [
  {
    title: "Classic",
    description:
      "Wide variety of blonde tobacco flavors, recommended for those who are not familiar!",
    price: "In house - 16.00 € \n Bowl to go - 6.00€",
    imageUrl: "/images/hookah/hookah-classic.webp",
  },
  {
    title: "Premium",
    description:
      "Wider range of blonde and dark tobacco varieties, recommended for those who want to experiment and discover new flavors!",
    price: "In house - 20.00 € \n Bowl to go - 7.00€",
    imageUrl: "/images/hookah/hookah-premium.webp",
  },
  {
    title: "Exclusive",
    description:
      "Huge variety of dark tobacco, from Virginia and Burley leaves. An Exclusive experience from start to finish!",
    price: "In house - 26.00 € \n Bowl to go - 9.00€",
    imageUrl: "/images/hookah/hookah-exclusiv.webp",
  },
  {
    title: "Ultra",
    description:
      "Enjoy authentic Hookah with refined tobacco elements and flavor delights, completed with cigar aromas. Recommended for experienced smokers or those seeking heavy hookah smoking in terms of nicotine!",
    price: "In house - 34.00 € \n Bowl to go - 12.00€",
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
    imageUrl: "/images/menu/hookah-solomon.jpg",
  },
  {
    title: "Maklaud Project",
    description: "",
    price: "+10.00 €",
    imageUrl: "/images/menu/hookah-maklaud.jpg",
  },
  {
    title: "Roden",
    description: "",
    price: "+10.00 €",
    imageUrl: "/images/menu/hookah-roden.jpg",
  },
  {
    title: "Japona, Oro, Katana, Sansara",
    description: "",
    price: "+5.00 €",
    imageUrl: "/images/menu/hookah-katana.jpg",
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
    imageUrl: "/images/menu/hookah-maklaud.jpg",
  },
  {
    title: "Citrus Tonic",
    description: "",
    price: "",
    imageUrl: "/images/menu/hookah-maklaud.jpg",
  },
];

/**
 * All hookah categories
 */
export const allHookahCategories: HookahCategory[] = [
  {
    name: "Hookah",
    items: hookahCategories,
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
  return hookahCategories;
};

/**
 * Get hookah categories
 */
export const getHookahCategories = (): MenuItem[] => {
  return hookahCategories;
};

/**
 * Get all hookah categories
 */
export const getAllHookahCategories = (): HookahCategory[] => {
  return allHookahCategories;
};

/**
 * Get items by category name
 */
export const getHookahByCategory = (
  categoryName: string,
): MenuItem[] | undefined => {
  const category = allHookahCategories.find((cat) => cat.name === categoryName);
  return category?.items;
};
