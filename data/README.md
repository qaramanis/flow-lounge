# Data Directory

This directory contains centralized data files for the Flow Lounge application.

## Structure

```
data/
├── events.ts       # Event data and fetching functions
└── README.md       # This file
```

## Events Data (`events.ts`)

### Usage

Import the data or helper functions from anywhere in your application:

```typescript
import { getEvents, getUpcomingEvents, getEventById } from "@/data/events";

// Get all events
const allEvents = getEvents();

// Get only upcoming events
const upcomingEvents = getUpcomingEvents();

// Get a specific event by ID
const event = getEventById("01");
```

### Available Functions

| Function | Description | Returns |
|----------|-------------|---------|
| `getEvents()` | Get all events | `Event[]` |
| `getEventsByCategory(category)` | Get events filtered by category | `Event[]` |
| `getUpcomingEvents()` | Get only upcoming events (isPast = false) | `Event[]` |
| `getPastEvents()` | Get only past events (isPast = true) | `Event[]` |
| `getEventById(id)` | Get a specific event by ID | `Event \| undefined` |
| `getLatestEvents(count)` | Get the latest N events | `Event[]` |
| `getEventCategories()` | Get all unique event categories | `string[]` |
| `getUpcomingEventsWithFallback(count)` | Get upcoming events, fill with past events if needed | `Event[]` |

### Event Type

Events use the `Event` interface from `@/types/event`:

```typescript
interface Event {
  id: string;
  title: string;
  description: string;
  date: string; // Display date (e.g., "Παρασκευή 9 Μαίου 2025")
  sortDate: string; // ISO date for sorting (e.g., "2025-05-09")
  time?: string;
  location?: string;
  capacity?: string;
  image: string;
  category: string;
  isPast: boolean;
  color?: string;
  height?: number; // For masonry layout
}
```

### Adding New Events

Events are **automatically sorted by date** (ascending - soonest first). You can add new events to the bottom of the `rawEvents` array in `data/events.ts` without worrying about the order:

```typescript
// Just add to the bottom - it will be sorted automatically!
{
  id: "10",
  title: "New Year's Party",
  description: "Ring in the new year with us!",
  date: "Τρίτη 31 Δεκεμβρίου 2025",
  sortDate: "2025-12-31", // Use ISO format (YYYY-MM-DD)
  time: "22:00",
  location: "Flow Lounge",
  image: "/flow-lounge.svg",
  category: "Party",
  isPast: false,
  color: "#EF5021",
  height: 500,
}
```

**Important:** Always include both `date` (for display) and `sortDate` (ISO format for sorting).

## Adding More Data Sources

As your application grows, you can add more data files following the same pattern:

### Example: Menu Data

```typescript
// data/menu.ts
import { MenuItem } from "@/types/menu";

export const menuItems: MenuItem[] = [
  // ... menu data
];

export const getMenuItems = (): MenuItem[] => {
  return menuItems;
};

export const getMenuItemsByCategory = (category: string): MenuItem[] => {
  return menuItems.filter(item => item.category === category);
};
```

### Example: Future API Integration

When you're ready to fetch from an API instead of static data:

```typescript
// data/events.ts
import { Event } from "@/types/event";

// For now, use static data
const staticEvents: Event[] = [ /* ... */ ];

/**
 * Get all events
 * TODO: Replace with API call when backend is ready
 */
export const getEvents = async (): Promise<Event[]> => {
  // Uncomment when API is ready:
  // const response = await fetch('/api/events');
  // return response.json();

  // For now, return static data:
  return staticEvents;
};
```

## Best Practices

1. **Keep data and types separate**: Data files in `/data`, type definitions in `/types`
2. **Use helper functions**: Don't export raw data arrays directly, use getter functions
3. **Document your functions**: Add JSDoc comments for better IDE support
4. **Keep it typed**: Always use TypeScript interfaces for data structures
5. **Plan for the future**: Structure your functions so they can be easily converted to API calls

## Future Enhancements

Potential additions to this directory:

- `menu.ts` - Menu items and categories
- `hookah.ts` - Hookah flavors and options
- `services.ts` - Service offerings
- `team.ts` - Team member information
- `testimonials.ts` - Customer testimonials
- `gallery.ts` - Image gallery data
- `newsletter.ts` - Newsletter templates
- `members.ts` - Membership tiers and benefits
