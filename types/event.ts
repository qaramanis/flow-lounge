export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  location?: string;
  capacity?: string;
  image: string;
  category: string;
  isPast: boolean;
  color?: string;
}
