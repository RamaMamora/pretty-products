import { FcLike, FcDislike } from "react-icons/fc";
import styles from "./productsCard.module.css";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
  console.log(product);
  const [favorites, setFavorites] = useLocalStorage("Favorites", []);
  const isFavorite = favorites.includes(product.id);
  const handleLike = () => {
    setFavorites((prevFavorites) =>
      isFavorite
        ? prevFavorites.filter((fav) => fav !== product.id)
        : [...prevFavorites, product.id]
    );
  };
  return (
    <figure className={styles.productCard}>
      <Link to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} />
      </Link>
      <div className={styles.info}>
        <div>
          <h3>{product.title}</h3>
        </div>

        <div className={styles.box}>
          <h4>{product.price}kr</h4>
          <div className={styles.icon}>
            {isFavorite ? (
              <FcDislike size={30} onClick={handleLike} />
            ) : (
              <FcLike size={30} onClick={handleLike} />
            )}
          </div>
        </div>
      </div>
    </figure>
  );
};
export default ProductsCard;
