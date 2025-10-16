import { Event } from "@/types/event";

/**
 * Centralized event data store
 * This file contains all event-related data that can be fetched from multiple sources
 */

/**
 * Raw event data - unsorted
 * Add new events to the bottom of this array
 */
const rawEvents: Event[] = [
  {
    id: "1",
    title: "2 Years Birthday Party",
    description:
      "Δευτέρα 28 Απριλίου στις 20:00, σας περιμένουμε να γιορτάσουμε 2 χρόνια λειτουργίας του καταστήματος, 2 χρόνια γεμάτη με στιγμές και εμπειρίες! θα βρείτε φωρεάν degustation και ποτό καλωσορίσματος",
    date: "Δευτέρα 28 Απριλίου 2025",
    sortDate: "2025-04-28",
    time: "20:00",
    location: "Flow Lounge",
    image: "/flow-lounge.svg",
    category: "Anniversary",
    isPast: false,
    color: "#EF5021",
    height: 570,
  },
  {
    id: "2",
    title: "CloudZ Open Party - ep.1",
    description:
      "Παρασκευή 9 Μαίου στις 20:00 με Special Cocktails & Degustation καθώς και House Beats από Dj Billakos. Σας περιμένουμε όλους για μια αξέχαστη βραδιά!",
    date: "Παρασκευή 9 Μαίου 2025",
    sortDate: "2025-05-09",
    time: "20:00",
    location: "Flow Lounge",
    image: "/flow-lounge.svg",
    category: "Party",
    isPast: false,
    color: "#EF5021",
    height: 250,
  },
  {
    id: "3",
    title: "Cocktails Essentials",
    description:
      "Τετάρτη 9 Ιουλίου Σας προσκαλούμε σε ένα μοναδικό καλοκαιρινό Cocktail Party με δροσιστικά signature drinks, εκρηκτικά vibes και τις μουσικές επιλογές του DJ Adam",
    date: "Τετάρτη 9 Ιουλίου 2025",
    sortDate: "2025-07-09",
    time: "20:00",
    location: "Flow Lounge",
    image: "/flow-lounge.svg",
    category: "Party",
    isPast: false,
    color: "#EF5021",
    height: 400,
  },
  {
    id: "4",
    title: "Hookah Festival - Schedule",
    description:
      "ΤΟ HOOKAH FESTIVAL ΣΤΗ ΘΕΣΣΑΛΟΝΙΚΗ ΕΙΝΑΙ ΠΛΕΟΝ ΓΕΓΟΝΟΣ! 😮‍💨😮‍💨 Κάθε παρέα δικαιούται απο ένα ΔΩΡΕΑΝ ναργιλέ ❗️❗️❗️3 μέρες γεμάτες μουσική και ζωντάνια, κάντε swipe δεξιά για να δείτε το πρόγραμμα του Festival! Να είστε όλοι εκεί! ",
    date: "26-28 Σεπτεμβρίου 2025",
    sortDate: "2025-09-26",
    time: "TBA",
    location: "Flow Lounge",
    image: "/flow-lounge.svg",
    category: "Festival",
    isPast: false,
    color: "#EF5021",
    height: 600,
  },
  {
    id: "5",
    title: "Hookah Festival - Day 1",
    description:
      "Ελάτε μαζί μας για την πρώτη μέρα του Hookah Festival, όπου θα βρείτε εξωτερικό Bar Station για εύκολη πρόσβαση σε ποτά και αναψυκτικά. Θα υπάρχει επίσης δωρεάν Degustation από τον Τίττο Περονέττι, όπου μπορέιτε να δοκιμάσετε ιδιαίτερα mix φτιαγμένα από τον ίδιο.",
    date: "Παρασκευή 26 Σεπτεμβρίου 2025",
    sortDate: "2025-09-26",
    time: "18:00",
    location: "Flow Lounge",
    image: "/flow-lounge.svg",
    category: "Festival",
    isPast: false,
    color: "#EF5021",
    height: 570,
  },
  {
    id: "6",
    title: "Hookah Festival - Day 2",
    description:
      "Την δεύτερη μέρα του φεστιβάλ θα ακούσετε σημερινά hits από τον Dj Kyzi. Θα έχετε επίσης την ευκαιρία να δοκιμάσετε τα καταπληκτικά mix φτιαγμένα από τον Τίττο Περονέττι (για όσους δεν πρόλαβαν την πρώτη μερα, και για όσους τους άρεσαν και ήρθαν να ξαναδοκιμάσουν).",
    date: "Σάββατο 27 Σεπτεμβρίου 2025",
    sortDate: "2025-09-27",
    time: "18:00",
    location: "Flow Lounge",
    image: "/flow-lounge.svg",
    category: "Festival",
    isPast: false,
    color: "#EF5021",
    height: 600,
  },
  {
    id: "7",
    title: "Hookah Festival - Day 3",
    description:
      "Σας περιμένουμε την τρίτη και τελευτία μέρα του φεστιβάλ μας όπου θα ακούσουμε μαζί Afro House από τον Dj Adam Rig. Θα έχετε μία ακόμα ευκαιρία να δοκιμάσετε τα καταπληκτικά mix φτιαγμένα από τον Τίττο Περονέττι. Μην χάσετε την ευκαιρία!",
    date: "Κυριακή 28 Σεπτεμβρίου 2025",
    sortDate: "2025-09-28",
    time: "18:00",
    location: "Flow Lounge",
    image: "/flow-lounge.svg",
    category: "Festival",
    isPast: false,
    color: "#EF5021",
    height: 500,
  },
  {
    id: "8",
    title: "CloudZ Open Party - ep.2",
    description:
      "Spooky vibes meet elegant masquerade! Φορέστε τη μάσκα σας και ελάτε να γιορτάσουμε το Halloween με στυλ. Costume contest με amazing prizes, themed cocktails, και haunting music. Best costume wins free hookah for a month!",
    date: "Παρασκευή 17 Οκτωβρίου 2025",
    sortDate: "2025-10-17",
    time: "21:00",
    location: "Flow Lounge",
    image: "/flow-lounge.svg",
    category: "Party",
    isPast: false,
    color: "#EF5021",
    height: 570,
  },
  {
    id: "9",
    title: "Halloween Party",
    description:
      "Spooky vibes meet elegant masquerade! Φορέστε τη μάσκα σας και ελάτε να γιορτάσουμε το Halloween με στυλ. Costume contest με amazing prizes, themed cocktails, και haunting music. Best costume wins free hookah for a month!",
    date: "Πέμπτη 31 Οκτωβρίου 2025",
    sortDate: "2025-10-31",
    time: "21:00",
    location: "Flow Lounge",
    image: "/flow-lounge.svg",
    category: "Party",
    isPast: false,
    color: "#EF5021",
    height: 520,
  },
];

/**
 * Sorted events by date (ascending - soonest first)
 * This is automatically sorted, so you can add new events to the bottom of rawEvents
 * and they'll be placed in the correct chronological order
 */
export const events: Event[] = [...rawEvents].sort((a, b) => {
  return new Date(a.sortDate).getTime() - new Date(b.sortDate).getTime();
});

/**
 * Get all events
 */
export const getEvents = (): Event[] => {
  return events;
};

/**
 * Get events by category
 */
export const getEventsByCategory = (category: string): Event[] => {
  return events.filter((event) => event.category === category);
};

/**
 * Get upcoming events (not past)
 */
export const getUpcomingEvents = (): Event[] => {
  return events.filter((event) => !event.isPast);
};

/**
 * Get past events
 */
export const getPastEvents = (): Event[] => {
  return events.filter((event) => event.isPast);
};

/**
 * Get event by ID
 */
export const getEventById = (id: string): Event | undefined => {
  return events.find((event) => event.id === id);
};

/**
 * Get latest N events (most recent by date)
 */
export const getLatestEvents = (count: number): Event[] => {
  // Events are sorted ascending, so latest events are at the end
  return events.slice(-count).reverse();
};

/**
 * Get all event categories
 */
export const getEventCategories = (): string[] => {
  return Array.from(new Set(events.map((event) => event.category)));
};

/**
 * Get upcoming events with past events as fallback
 * Prioritizes upcoming events, but fills with most recent past events if needed
 * @param count - Number of events to return
 */
export const getUpcomingEventsWithFallback = (count: number): Event[] => {
  const upcoming = getUpcomingEvents();

  if (upcoming.length >= count) {
    return upcoming.slice(0, count);
  }

  // Need to fill with past events
  const needed = count - upcoming.length;
  const past = getPastEvents()
    .sort((a, b) => {
      // Sort past events by date descending (most recent first)
      return new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime();
    })
    .slice(0, needed);

  return [...upcoming, ...past];
};
