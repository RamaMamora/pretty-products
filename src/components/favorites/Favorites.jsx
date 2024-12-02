import Styles from "./favorites.module.css";
import Loading from "../loading/Loading";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import ProductsCard from "../productsCard/ProductsCard";
const Favorites = () => {
  const { isLoading, furniture } = useFetchProducts();

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className={Styles.favorites}>
          {furniture?.map((pro) => (
            <ProductsCard product={pro} />
          ))}
        </section>
      )}
    </>
  );
};
export default Favorites;
