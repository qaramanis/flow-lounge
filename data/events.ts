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
      "Monday, April 28th at 20:00, we're waiting for you to celebrate 2 years of operation, 2 years filled with moments and experiences! You'll find free degustation and a welcome drink",
    date: "Monday, April 28th 2025",
    sortDate: "2025-04-28",
    time: "20:00",
    location: "Flow Lounge",
    image: "/images/events/2-years-birthday.jpeg",
    category: "Anniversary",
    isPast: false,
    color: "#EF5021",
    height: 380,
  },
  {
    id: "2",
    title: "CloudZ Open Party - ep.1",
    description:
      "Friday, May 9th at 20:00 with Special Cocktails & Degustation as well as House Beats from DJ Billakos. We're waiting for you all for an unforgettable night!",
    date: "Friday, May 9th 2025",
    sortDate: "2025-05-09",
    time: "20:00",
    location: "Flow Lounge",
    image: "/images/events/cloudz.jpeg",
    category: "Party",
    isPast: false,
    color: "#EF5021",
    height: 340,
  },
  {
    id: "3",
    title: "Cocktails Essentials",
    description:
      "Wednesday, July 9th - We invite you to a unique summer Cocktail Party with refreshing signature drinks, explosive vibes and music selections from DJ Adam",
    date: "Wednesday, July 9th 2025",
    sortDate: "2025-07-09",
    time: "20:00",
    location: "Flow Lounge",
    image: "/images/events/cocktail-party.jpeg",
    category: "Party",
    isPast: false,
    color: "#EF5021",
    height: 530,
  },
  {
    id: "4",
    title: "Hookah Festival - Schedule",
    description:
      "THE HOOKAH FESTIVAL IN THESSALONIKI IS NOW A REALITY! 😮‍💨😮‍💨 Each group is entitled to one FREE hookah ❗️❗️❗️3 days filled with music and liveliness, swipe right to see the Festival schedule! Be there everyone!",
    date: "September 26-28, 2025",
    sortDate: "2025-09-26",
    time: "TBA",
    location: "Flow Lounge",
    image: "/images/events/hookah-festival.jpeg",
    category: "Festival",
    isPast: false,
    color: "#EF5021",
    height: 320,
  },
  {
    id: "5",
    title: "Hookah Festival - Day 1",
    description:
      "Join us for the first day of the Hookah Festival, where you'll find an outdoor Bar Station for easy access to drinks and refreshments. There will also be free Degustation by Titto Peronetti, where you can try special mixes made by him.",
    date: "Friday, September 26th 2025",
    sortDate: "2025-09-26",
    time: "18:00",
    location: "Flow Lounge",
    image: "/images/events/festival-day-1.jpeg",
    category: "Festival",
    isPast: false,
    color: "#EF5021",
    height: 350,
  },
  {
    id: "6",
    title: "Hookah Festival - Day 2",
    description:
      "On the second day of the festival you'll hear today's hits from DJ Kyzi. You'll also have the opportunity to try the amazing mixes made by Titto Peronetti (for those who missed the first day, and for those who loved them and came to try again).",
    date: "Saturday, September 27th 2025",
    sortDate: "2025-09-27",
    time: "18:00",
    location: "Flow Lounge",
    image: "/images/events/festival-day-2.jpeg",
    category: "Festival",
    isPast: false,
    color: "#EF5021",
    height: 350,
  },
  {
    id: "7",
    title: "Hookah Festival - Day 3",
    description:
      "We're waiting for you on the third and final day of our festival where we'll listen together to Afro House from DJ Adam Rig. You'll have one more chance to try the amazing mixes made by Titto Peronetti. Don't miss the opportunity!",
    date: "Sunday, September 28th 2025",
    sortDate: "2025-09-28",
    time: "18:00",
    location: "Flow Lounge",
    image: "/images/events/festival-day-3.jpeg",
    category: "Festival",
    isPast: false,
    color: "#EF5021",
    height: 350,
  },
  {
    id: "8",
    title: "CloudZ Open Party - ep.2",
    description:
      "Spooky vibes meet elegant masquerade! Wear your mask and come celebrate Halloween in style. Costume contest with amazing prizes, themed cocktails, and haunting music. Best costume wins free hookah for a month!",
    date: "Friday, October 17th 2025",
    sortDate: "2025-10-17",
    time: "21:00",
    location: "Flow Lounge",
    image: "/logo-new.svg",
    category: "Party",
    isPast: false,
    color: "#EF5021",
    height: 570,
  },
  {
    id: "9",
    title: "Halloween Party",
    description:
      "Thursday, October 31st 2025 | 🕣 Starts: 20:30. Get ready for a magical and spooky impressive Halloween night at Flow Lounge! What awaits you: Atmospheric music, Welcome drinks, Titto Hookah Degustation, Themed special cocktails. Dark and enchanting scenery that puts you in the Halloween spirit. Come with your crew and experience a Halloween filled with mystery and magic!",
    date: "Thursday, October 31st 2025",
    sortDate: "2025-10-31",
    time: "21:00",
    location: "Flow Lounge",
    image: "/images/events/flow-halloween.png",
    category: "Party",
    isPast: false,
    color: "#EF5021",
    height: 550,
  },
  {
    id: "10",
    title: "Fruit Bowls by Titto Peronetti",
    description:
      "Παρασκευή στο Flow. Fruit Bowls by Titto Peronetti. Μοναδικά μιξάκια, μόνο μετά τις 21:00. Be there - feel the flow.",
    date: "Friday, November 28th 2025",
    sortDate: "2025-11-28",
    time: "21:00",
    location: "Flow Lounge",
    image: "/images/events/fruit-bowl-1350x1080.jpg",
    category: "Party",
    isPast: false,
    color: "#EF5021",
    height: 380,
  },
  {
    id: "11",
    title: "Ta Spame... Entexws",
    description:
      "Σάββατο στο Flow. Το πρώτο & μοναδικό Έντεχνο Ορθάδικο Party. Τα σπάμε… έντεχνα. Free σφηνάκια για όλους. 21:00 - be there.",
    date: "Saturday, November 29th 2025",
    sortDate: "2025-11-29",
    time: "21:00",
    location: "Flow Lounge",
    image: "/images/events/1920x1080-entexno.png",
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
