import { ReactNode } from "react";
import ProductCardInterface, {
  ItemObjectInterface,
} from "../../Interfaces/ProductCardInterface";

export type CartItemInterface = {
  [id: number]: ItemObjectInterface;
};

export type CartAction =
  | { type: "added"; item: ProductCardInterface }
  | { type: "removed"; id: number }
  | { type: "cleared" }
  | { type: "initialized"; items: CartItemInterface };

export interface CartProviderProps {
  children: ReactNode;
}
