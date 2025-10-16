export interface Event {
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
