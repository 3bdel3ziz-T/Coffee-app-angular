import { CoffeeCup, CoffeeBeans, Id } from "./coffee";

export type Favorite = (CoffeeCup | CoffeeBeans)

export type FavItemRef = {ItemId:Id}