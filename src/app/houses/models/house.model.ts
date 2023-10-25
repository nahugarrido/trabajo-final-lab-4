export interface House {
  id: number;
  price: number;
  address: Address;
  parking: number;
  bathrooms: number;
  bedrooms: number;
  description: string;
  image: string;
}

interface Address {
  street: string;
  district: string;
  country: string;
}
