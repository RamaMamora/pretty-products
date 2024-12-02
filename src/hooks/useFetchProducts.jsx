import { useEffect, useState } from "react";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  let furniture = products.filter((p) => p.category.includes("furniture"));
  /*  let fragrances = products.filter((f) => f.category.includes("fragrances")); */
  let product = products.filter((r) => r.product > 4.8);

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, furniture, /* fragrances, */ isLoading, error, product };
};
export { useFetchProducts };
