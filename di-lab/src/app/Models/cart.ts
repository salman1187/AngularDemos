export class CartItem {
    id!:string;
    productId!: number;
    quantity!: number;
}

export interface ICart {
    items: CartItem[];
}