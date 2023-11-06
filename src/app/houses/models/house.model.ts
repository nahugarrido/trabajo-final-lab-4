export interface House {
  id: number;
  price: number;
  address: Address;
  parking: number;
  bathrooms: number;
  bedrooms: number;
  description: string;
  image: string;
  user_id: number;
}

interface Address {
  street: string;
  district: string;
  country: string;
}
