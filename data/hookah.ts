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
      "Μεγάλη ποικιλία γεύσεων ξανθού καπνού. Συστήνεται είτε για αρχάριους, είτε για εκείνους που δεν έχουν μεγάλη εμπειρία.",
    price: "14.00 €",
  },
  {
    title: "Premium",
    description:
      "Σειρά ξανθών καπνών. Συστήνεται για εκείνους που τους αρέσει ο ξανθός καπνός και θέλουν το κάτι παραπάνω",
    price: "18.00 €",
  },
  {
    title: "Exclusive",
    description:
      "Τεράστια ποικιλία μαύρου καπνού, από φύλλα Virginia, Burley, Συστήνεται για καπνιστές.",
    price: "24.00 €",
  },
  {
    title: "Ultra",
    description:
      "Απολαύστε εξοτικές γεύσεις με εκλεπτυσμένα καπνικά στοιχεία, συμπληρωμένα με αρώματα πούρου. Μια ultra εμπειρία από την αρχή ως το τέλος.",
    price: "34.00 €",
  },
];

/**
 * Refill Categories
 */
const refillCategories: MenuItem[] = [
  {
    title: "Classic",
    description:
      "Μεγάλη ποικιλία γεύσεων ξανθού καπνού. Συστήνεται είτε για αρχάριους, είτε για εκείνους που δεν έχουν μεγάλη εμπειρία.",
    price: "7.00 €",
  },
  {
    title: "Premium",
    description: "Refill Premium γεύσης στον ναργιλές σας",
    price: "9.00 €",
  },
  {
    title: "Exclusive",
    description:
      "Τεράστια ποικιλία μαύρου καπνού, από φύλλα Virginia, Burley, Συστήνεται για καπνιστές.",
    price: "12.00 €",
  },
  {
    title: "Ultra",
    description:
      "Απολαύστε εξοτικές γεύσεις με εκλεπτυσμένα καπνικά στοιχεία, συμπληρωμένα με αρώματα πούρου. Μια ultra εμπειρία από την αρχή ως το τέλος.",
    price: "20.00 €",
  },
];

/**
 * All hookah categories with refills
 */
export const allHookahCategories: HookahCategory[] = [
  {
    name: "Hookah",
    items: hookahCategories,
  },
  {
    name: "Refill Bowls",
    items: refillCategories,
  },
];

/**
 * Get all hookah items (both hookahs and refills)
 */
export const getAllHookahItems = (): MenuItem[] => {
  return [...hookahCategories, ...refillCategories];
};

/**
 * Get hookah categories
 */
export const getHookahCategories = (): MenuItem[] => {
  return hookahCategories;
};

/**
 * Get refill categories
 */
export const getRefillCategories = (): MenuItem[] => {
  return refillCategories;
};

/**
 * Get all hookah categories
 */
export const getHookahCategoriesWithRefills = (): HookahCategory[] => {
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
