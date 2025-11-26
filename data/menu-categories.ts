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
    description: "",
    link: "/hookah",
    imageUrl: "/images/menu/hookah-maklaud.webp",
  },
  {
    title: "Cocktails",
    description: "",
    link: "/menu/cocktails",
    imageUrl: "/images/menu/cocktails.webp",
  },
  {
    title: "Homemade Lemonades",
    description: "",
    link: "/menu/lemonades",
    imageUrl:
      "https://images.unsplash.com/photo-1695490454828-f8df9109da43?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
  },
  {
    title: "Soft Drinks and Juices",
    link: "/menu/soft-drinks",
    imageUrl:
      "https://images.unsplash.com/photo-1632852521784-d85d5b62dd62?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
  },
  {
    title: "Tea and Coffee",
    link: "/menu/tea-coffee",
    imageUrl:
      "https://images.unsplash.com/photo-1609016617751-e80552ae6ec2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1065",
  },
  {
    title: "Drinks",
    description: "",
    link: "/menu/drinks",
    imageUrl:
      "https://images.unsplash.com/photo-1640766322140-ab90a7bc71e5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
  },
  {
    title: "Wines",
    description: "",
    link: "/menu/wines",
    imageUrl:
      "https://images.unsplash.com/photo-1547595628-c61a29f496f0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
  },
  {
    title: "Beers and Ciders",
    description: "",
    link: "/menu/beers-ciders",
    imageUrl:
      "https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
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
