import { MenuItem, TeaAndCoffeeCategory } from "@/types/menu";

/**
 * Centralized tea and coffee data store
 * This file contains all tea and coffee-related data that can be fetched from multiple sources
 */

/**
 * Single Espresso
 */
const singleEspresso: MenuItem[] = [
  {
    title: "Ristretto / Normale / Lugo",
    description: "",
    price: "2.50 €",
  },
  {
    title: "Espresso Americano",
    description: "",
    price: "3.00 €",
  },
  {
    title: "Cappuccino",
    description: "",
    price: "3.50 €",
  },
];

/**
 * Double Espresso
 */
const doubleEspresso: MenuItem[] = [
  {
    title: "Ristretto / Normale / Lugo",
    description: "",
    price: "3.50 €",
  },
  {
    title: "Espresso Americano",
    description: "",
    price: "3.50 €",
  },
  {
    title: "Cappuccino",
    description: "",
    price: "4.00 €",
  },
  {
    title: "Latte",
    description: "",
    price: "3.50 €",
  },
];

/**
 * Cold Coffee
 */
const coldCoffee: MenuItem[] = [
  {
    title: "Freddo Espresso",
    description: "",
    price: "3.50 €",
  },
  {
    title: "Freddo Cappuccino",
    description: "",
    price: "4.00 €",
  },
];

/**
 * Greek Coffee
 */
const greekCoffee: MenuItem[] = [
  {
    title: "Greek Coffee Single",
    description: "",
    price: "2.50 €",
  },
  {
    title: "Greek Coffee Double",
    description: "",
    price: "3.00 €",
  },
  {
    title: "Nescafe Hot",
    description: "",
    price: "3.50 €",
  },
  {
    title: "Nescafe Cold",
    description: "",
    price: "3.50 €",
  },
];

/**
 * Tea Route
 */
const teaRoute: MenuItem[] = [
  {
    title: "Chun Mei Bio",
    description: "Chinese Green Tea",
    price: "3.50 €",
  },
  {
    title: "English Breakfast Tea",
    description: "Indian and Ceylon Black Tea",
    price: "3.50 €",
  },
  {
    title: "Chamomile",
    description: "Relaxing, Relieves Teething Pains",
    price: "3.50 €",
  },
  {
    title: "Red Square",
    description: "Cranberry, Hibiscus, Apple",
    price: "3.50 €",
  },
  {
    title: "Alexandria Symphony",
    description: "Raspberry, Strawberry, Peppermint",
    price: "3.50 €",
  },
  {
    title: "Evening Chat",
    description: "Apple and Cinnamon",
    price: "3.50 €",
  },
  {
    title: "Scented Bush",
    description: "Green tea, Orange, Cardamom",
    price: "3.50 €",
  },
];

/**
 * Ice Tea
 */
const iceTea: MenuItem[] = [
  {
    title: "Peach",
    description: "",
    price: "4.00 €",
  },
  {
    title: "Red Berries",
    description: "",
    price: "4.00 €",
  },
  {
    title: "Melon",
    description: "",
    price: "4.00 €",
  },
  {
    title: "Energy Matcha",
    description: "Guarana, Mate, Ginger, Pomegranate, Stevia",
    price: "4.00 €",
  },
];

/**
 * All tea and coffee categories
 */
export const teaAndCoffeeCategories: TeaAndCoffeeCategory[] = [
  {
    name: "Single Espresso",
    items: singleEspresso,
  },
  {
    name: "Double Espresso",
    items: doubleEspresso,
  },
  {
    name: "Cold Coffee",
    items: coldCoffee,
  },
  {
    name: "Greek Coffee",
    items: greekCoffee,
  },
  {
    name: "Tea Route",
    items: teaRoute,
  },
  {
    name: "Ice Tea",
    items: iceTea,
  },
];

/**
 * Get all tea and coffee items
 */
export const getAllTeaAndCoffee = (): MenuItem[] => {
  return [
    ...singleEspresso,
    ...doubleEspresso,
    ...coldCoffee,
    ...greekCoffee,
    ...teaRoute,
    ...iceTea,
  ];
};

/**
 * Get single espresso
 */
export const getSingleEspresso = (): MenuItem[] => {
  return singleEspresso;
};

/**
 * Get double espresso
 */
export const getDoubleEspresso = (): MenuItem[] => {
  return doubleEspresso;
};

/**
 * Get cold coffee
 */
export const getColdCoffee = (): MenuItem[] => {
  return coldCoffee;
};

/**
 * Get greek coffee
 */
export const getGreekCoffee = (): MenuItem[] => {
  return greekCoffee;
};

/**
 * Get tea route
 */
export const getTeaRoute = (): MenuItem[] => {
  return teaRoute;
};

/**
 * Get ice tea
 */
export const getIceTea = (): MenuItem[] => {
  return iceTea;
};

/**
 * Get all tea and coffee categories
 */
export const getTeaAndCoffeeCategories = (): TeaAndCoffeeCategory[] => {
  return teaAndCoffeeCategories;
};

/**
 * Get items by category name
 */
export const getTeaAndCoffeeByCategory = (
  categoryName: string,
): MenuItem[] | undefined => {
  const category = teaAndCoffeeCategories.find(
    (cat) => cat.name === categoryName,
  );
  return category?.items;
};
