/* import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import styles from "./myFavorites.module.css";
import ProductsCard from "../productsCard/ProductsCard";

const MyFavorites = () => {
  const [favorites] = useLocalStorage("Favorites", []);
  const [products, setProduct] = useState([]);
  const [error, setError] = useState(null);

  const fetchProduct = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProduct(data.product);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const favoriteProducts = products.filter((products) =>
    favorites.includes(products.id)
  );

  return (
    <section className={styles.MyFavorites}>
      {favoriteProducts?.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default MyFavorites;
 */
