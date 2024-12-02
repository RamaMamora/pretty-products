import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import styles from "./myFavorites.module.css";
import ProductsCard from "../productsCard/ProductsCard";
import { useFetchProducts } from "../../hooks/useFetchProducts";

const MyFavorites = () => {
  const [favorites] = useLocalStorage("Favorites", []);
  const { products } = useFetchProducts();
  const [setProduct] = useState([]);
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

  console.log(favoriteProducts);

  return (
    <section className={styles.MyFavorites}>
      {favoriteProducts?.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default MyFavorites;
/* import { useLocalStorage } from "@uidotdev/usehooks";
import styles from "./myFavorites.module.css";
import ProductsCard from "../productsCard/ProductsCard";
import { useFetchProducts } from "../../hooks/useFetchProducts";

const MyFavorites = () => {
  const [favorites] = useLocalStorage("Favorites", []);
  const { products } = useFetchProducts();
  // const fetchProduct = async () => {
  //   try {
  //     const response = await fetch("https://dummyjson.com/products");
  //     const data = await response.json();
  //     setProduct(data.product);
  //   } catch (error) {
  //     setError(error.message);
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchProduct();
  // }, []);

  const favoriteProducts = products.filter((products) =>
    favorites.includes(products.id)
  );

  console.log(favoriteProducts);

  return (
    <section className={styles.MyFavorites}>
      {favoriteProducts?.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default MyFavorites; */
