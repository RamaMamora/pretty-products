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
      <Link to={`/product/$product.id`}>
        <img src={product.thumbnail} alt={product.title} />
      </Link>

      <div>
        <h2>{product.title}</h2>
      </div>
      <p>{product.description}</p>
      <h4>{product.price}</h4>
      <div className={styles.icon}>
        {isFavorite ? (
          <FcDislike size={30} onClick={handleLike} />
        ) : (
          <FcLike size={30} onClick={handleLike} />
        )}
      </div>
    </figure>
  );
};
export default ProductsCard;
