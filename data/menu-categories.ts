import { MenuCategory } from "@/types/menu";

/**
 * Centralized menu categories data store
 * This file contains all main menu categories that link to specific menu pages
 */

/**
 * Main menu categories
 */
const menuCategories: MenuCategory[] = [
  {
    title: "Hookah",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/hookah",
  },
  {
    title: "Cocktails",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/menu/cocktails",
  },
  {
    title: "Homemade Lemonades",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/menu/lemonades",
  },
  {
    title: "Soft Drinks and Juices",
    link: "/menu/soft-drinks",
  },
  {
    title: "Tea and Coffee",
    link: "/menu/tea-coffee",
  },
  {
    title: "Drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/menu/drinks",
  },
  {
    title: "Wines",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/menu/wines",
  },
  {
    title: "Beers and Ciders",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/menu/beers-ciders",
  },
];

/**
 * Get all menu categories
 */
export const getMenuCategories = (): MenuCategory[] => {
  return menuCategories;
};

/**
 * Get menu category by title
 */
export const getMenuCategoryByTitle = (
  title: string,
): MenuCategory | undefined => {
  return menuCategories.find(
    (category) => category.title.toLowerCase() === title.toLowerCase(),
  );
};

/**
 * Get menu category by link
 */
export const getMenuCategoryByLink = (
  link: string,
): MenuCategory | undefined => {
  return menuCategories.find((category) => category.link === link);
};
