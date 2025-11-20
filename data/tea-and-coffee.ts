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
    price: "3.00 €",
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
    price: "4.00 €",
  },
  {
    title: "Espresso Americano",
    description: "",
    price: "4.00 €",
  },
  {
    title: "Cappuccino",
    description: "",
    price: "4.50 €",
  },
  {
    title: "Latte",
    description: "",
    price: "4.50 €",
  },
];

/**
 * Cold Coffee
 */
const coldCoffee: MenuItem[] = [
  {
    title: "Freddo Espresso",
    description: "",
    price: "4.00 €",
  },
  {
    title: "Freddo Cappuccino",
    description: "",
    price: "4.50 €",
  },
];

/**
 * Greek Coffee
 */
const greekCoffee: MenuItem[] = [
  {
    title: "Greek Coffee Single",
    description: "",
    price: "3.00 €",
  },
  {
    title: "Greek Coffee Double",
    description: "",
    price: "3.50 €",
  },
];

/**
 * Chocolates
 */
const chocolates: MenuItem[] = [
  {
    title: "Chocolate Classic ",
    description: "Hot or Cold",
    price: "4.50 €",
  },
  {
    title: "Chocolate Salt Caramel",
    description: "Hot or Cold",
    price: "5.00 €",
  },
  {
    title: "Chocolate Lila Pause",
    description: "Hot or Cold",
    price: "5.00 €",
  },
];

/**
 * Cocktail Tea
 */
const cocktailTea: MenuItem[] = [
  {
    title: "Sweet november",
    description:
      "Το Sweet November με τη καπνώδη βάση του Zhen Shan σε συνδυασμό με τη δροσιά του πορτοκαλιού, την έντονη γεύση του τζίντζερ και τη γλύκα του μελιού είναι ένα τσάι που θυμίζει μια σφιχτή αγκαλιά σε ένα κρύο απόγευμα του Νοέμβρη.",
    price: "7.50 €",
  },
  {
    title: "Kislaslatki",
    description:
      "Το Kislaslatki είναι ένα δροσερό blend με φρουτώδη ένταση από μύρτιλο και raspberry, οξύτητα από γκρειπφρουτ, και χαρακτήρα λουλουδιών από τριαντάφυλλο και ιβίσκο. Πρόκειται για το ιδανικό αναζωογονητικό ρόφημα.",
    price: "7.00 €",
  },
  {
    title: "Blue Dragon",
    description: "",
    price: "7.00 €",
  },
  {
    title: "Apple Pie",
    description:
      "Το Apple Pie είναι ένα γλυκό μίγμα μήλου και κανέλας εμπνευσμένο από την αγαπημένη μηλόπιτα. Το Shu Puerh είναι ένα είδος κινέζικου μαύρου τσαγιού, γνωστό για την ώριμη, γήινη γεύση του.",
    price: "7.50 €",
  },
  {
    title: "Red velvet",
    description:
      "Το Red Velvet είναι ένα ρόφημα με πολλά επίπεδα. Γλυκόξινη, αρμονική επίγευση δίνεται από το συνδυασμό χαμομηλιού και raspberry.",
    price: "6.50 €",
  },
];

/**
 * Ceremony Tea
 */
const ceremonyTea: MenuItem[] = [
  {
    title: "Gaba Oolong Sapphire",
    description: "",
    price: "11.50 €",
  },
  {
    title: "Pu-erh Taetea V93",
    description: "",
    price: "10.50 €",
  },
  {
    title: "Tie Guan Yin",
    description: "",
    price: "9.50 €",
  },
  {
    title: "Fo Shou Oolong",
    description: "",
    price: "9.50 €",
  },
];

/**
 * Classic Tea Route
 */
const teaRoute: MenuItem[] = [
  {
    title: "Chun Mei",
    description: "Bio Chinese Green Tea",
    price: "4.00 €",
  },
  {
    title: "English Breakfast",
    description: "Indian and Ceylon Black Tea",
    price: "4.00 €",
  },
  {
    title: "Chamomile",
    description: "Relaxing, Relieves Teething Pains",
    price: "4.00 €",
  },
  {
    title: "Red Square",
    description: "Cranberry, Hibiscus, Apple",
    price: "4.00 €",
  },
  {
    title: "Alexandria Symphony",
    description: "Raspberry, Strawberry, Peppermint",
    price: "4.00 €",
  },
  {
    title: "Evening Chat",
    description: "Apple and Cinnamon",
    price: "4.00 €",
  },
  {
    title: "Scented Bush",
    description: "Green tea, Orange, Cardamom",
    price: "4.00 €",
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
    title: "Lemon & Bergamot",
    description: "",
    price: "4.00 €",
  },
];

/**
 * All tea and coffee categories
 */
export const teaAndCoffeeCategories: TeaAndCoffeeCategory[] = [
  {
    name: "Classic Tea Route",
    items: teaRoute,
  },
  {
    name: "Cocktail Tea",
    items: cocktailTea,
  },
  {
    name: "Ceremony Tea",
    items: ceremonyTea,
  },
  {
    name: "Ice Tea",
    items: iceTea,
  },
  {
    name: "Chocolates",
    items: chocolates,
  },
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
    ...cocktailTea,
    ...ceremonyTea,
    ...teaRoute,
    ...iceTea,
    ...chocolates,
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
 * Get cocktail tea
 */
export const getCocktailTea = (): MenuItem[] => {
  return cocktailTea;
};

/**
 * Get ceremony tea
 */
export const getCeremonyTea = (): MenuItem[] => {
  return ceremonyTea;
};

/**
 * Get classic tea route
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
 * Get chocolates
 */
export const getChocolates = (): MenuItem[] => {
  return chocolates;
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
