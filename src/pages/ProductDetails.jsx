import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/loading/Loading";
import PageHeader from "../components/pageHeader/PageHeader";
import styles from "../pages/productDetails.module.css";

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
            <div className={styles.productDescription}>
              <h2>Produkt beskrivelse</h2>
              <div>
                {/*   {product.description.map((description, index) => (
                  <p key={index}>{description}</p>
                ))} */}
              </div>
            </div>
            <div className={styles.productDimensions}>
              <h2>Produkts måling</h2>
              <div>
                {/*  {product.dimensions.map((dimensions, index) => (
                  <p key={index}>{dimensions}</p>
                ))} */}
              </div>
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
