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
      "Μεγάλη ποικιλία γεύσεων ξανθού καπνού, συστήνεται για εκείνους που δεν είναι εξοικειωμένοι!",
    price: "In house - 16.00 € \n Bowl to go - 6.00€",
  },
  {
    title: "Premium",
    description:
      "Μεγαλύτερο εύρος ποικιλίας καπνών ξανθών και μαύρων, συστήνεται για εκείνους που θέλουν να πειραματιστούν και να γνωρίσουν νέες γεύσεις!",
    price: "In house - 20.00 € \n Bowl to go - 7.00€",
  },
  {
    title: "Exclusive",
    description:
      "Τεράστια ποικιλία μαύρου καπνού, από φύλλα Virginia, Burley. Μια Exclusive εμπειρία από την αρχή ως το τέλος!",
    price: "In house - 26.00 € \n Bowl to go - 9.00€",
  },
  {
    title: "Ultra",
    description:
      "Απολαύστε αυθεντικό ναργιλέ με εκλεπτυσμένα καπνικά στοιχεία και  γευστικές απολαύσεις, συμπληρωμένα με αρώματα πούρου. Συστήνεται για έμπειρους καπνιστές ή για εκείνους που αναζητούν βαρύ κάπνισμα του ναργιλέ ως προς την νικοτίνη!",
    price: "In house - 34.00 € \n Bowl to go - 12.00€",
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
