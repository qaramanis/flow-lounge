import { MenuItem, HomemadeLemonadesCategory } from "@/types/menu";

/**
 * Centralized homemade lemonades data store
 * This file contains all homemade lemonade-related data that can be fetched from multiple sources
 */

/**
 * Homemade Lemonades
 */
const homemadeLemonades: MenuItem[] = [
  {
    title: "Classic Lemonade",
    description: "",
    price: "4.50 €",
  },
  {
    title: "Raspberry Passion",
    description: "",
    price: "5.00 €",
  },
  {
    title: "Wild Berries",
    description: "",
    price: "5.00 €",
  },
];

/**
 * All homemade lemonade categories
 */
export const homemadeLemonadeCategories: HomemadeLemonadesCategory[] = [
  {
    name: "Homemade Lemonades",
    items: homemadeLemonades,
  },
];

/**
 * Get all homemade lemonades
 */
export const getAllHomemadeLemonades = (): MenuItem[] => {
  return homemadeLemonades;
};

/**
 * Get homemade lemonades
 */
export const getHomemadeLemonades = (): MenuItem[] => {
  return homemadeLemonades;
};

/**
 * Get all homemade lemonade categories
 */
export const getHomemadeLemonadeCategories =
  (): HomemadeLemonadesCategory[] => {
    return homemadeLemonadeCategories;
  };

/**
 * Get items by category name
 */
export const getHomemadeLemonadesByCategory = (
  categoryName: string,
): MenuItem[] | undefined => {
  const category = homemadeLemonadeCategories.find(
    (cat) => cat.name === categoryName,
  );
  return category?.items;
};
