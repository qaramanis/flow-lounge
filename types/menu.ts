export interface MenuItem {
  title: string;
  description: string;
  price: string;
  imageUrl?: string;
}

export interface MenuCategory {
  title: string;
  description?: string;
  link: string;
  imageUrl?: string;
}

export interface CocktailCategory {
  name: string;
  items: MenuItem[];
}

export interface HookahCategory {
  name: string;
  items: MenuItem[];
}

export interface WinesCategory {
  name: string;
  items: MenuItem[];
}

export interface DrinksCategory {
  name: string;
  items: MenuItem[];
}

export interface BeersAndCidersCategory {
  name: string;
  items: MenuItem[];
}

export interface TeaAndCoffeeCategory {
  name: string;
  items: MenuItem[];
}

export interface HomemadeLemonadesCategory {
  name: string;
  items: MenuItem[];
}

export interface SoftDrinksAndJuicesCategory {
  name: string;
  items: MenuItem[];
}
