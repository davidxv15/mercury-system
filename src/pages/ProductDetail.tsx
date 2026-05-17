import { Link, useParams } from "react-router-dom"
import { products } from "../data/products"
import { useCart } from "../context/CartContext"

function ProductDetail() {
  const { productId } = useParams();
  const { addToCart } = useCart();

  const product = products.find((item) => item.id === productId);

  
}