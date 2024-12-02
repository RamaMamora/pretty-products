import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/loading/Loading";
import PageHeader from "../components/pageHeader/PageHeader";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchProductById = async (id) => {
    setIsLoading(true);
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    setProduct(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchProductById(id);
  }, [id]);

  return (
    <>
      {product ? (
        <article>
          <PageHeader title={product.title} headerImg={product.thumbnail} />
          <div className={styles.productContent}>
            <div className={styles.recipeIngredients}>
              <h2>Description</h2>
              <ul>
                {product.description.map((description, index) => (
                  <li key={index}>{description}</li>
                ))}
              </ul>
            </div>
            <div className={styles.productDimensions}>
              <h2>Dimensions</h2>
              <ol>
                {product.dimensions.map((dimensions, index) => (
                  <li key={index}>{dimensions}</li>
                ))}
              </ol>
            </div>
          </div>
        </article>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default ProductDetails;
