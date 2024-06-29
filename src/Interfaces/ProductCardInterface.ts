export default interface ProductCardInterface {
  description: string;
  image: string;
  price: number;
  title: string;
  id: number;
}

export interface ProductCardProps extends ProductCardInterface {
  isInCart: boolean;
}

export interface ItemObjectInterface {
  description: string;
  image: string;
  price: number;
  title: string;
}
