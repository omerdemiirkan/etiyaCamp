import Product from "../../products/models/product";

export default interface CartItem {
  product: Product;
  quantity: number;


}