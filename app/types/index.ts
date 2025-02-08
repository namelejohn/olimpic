export interface Product {
  id: string;
  name: string;
  price: number;
  image: any;
  category: string;
  weight: string;
  description: string;
  discount: number;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  detail: string;
}

export interface Filter {
  id: number;
  name: string;
}

export interface Match {
  id: number;
  league: string;
  date: string;
  time: string;
  team1: string;
  team2: string;
}
