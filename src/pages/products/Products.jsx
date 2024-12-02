import { useState } from "react";
import headerImg from "../../assets/header.webp";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import styles from "./products.module.css";
import PageHeader from "../../components/pageHeader/PageHeader";
import Loading from "../../components/loading/Loading";
import Button from "../../components/button/Button";
import buttonStyles from "../../components/button/button.module.css";
import ProductsCard from "../../components/productsCard/ProductsCard";

const Products = () => {
  const { products, furniture, isLoading } = useFetchProducts();

  const [filtered, setFiltered] = useState([...furniture]);
  const [activeFilter, setActiveFilter] = useState("Alle");

  const filters = {
    Alle: products,
    Furniture: furniture,
  };
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setFiltered(filters[filter]);
  };

  const productsArray = filtered?.length > 0 ? filtered : products;
  return (
    <section>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageHeader headerImg={headerImg} />
          <div className={styles.filters}>
            <Button
              buttonText="Alle"
              onClick={() => handleFilterChange("Alle")}
              className={
                activeFilter === "Alle" ? `${buttonStyles.active}` : ""
              }
            />
            <Button
              buttonText="Furniture"
              onClick={() => handleFilterChange("Furtinure")}
              className={
                activeFilter === "Furtinure" ? `${buttonStyles.active}` : ""
              }
            />
          </div>
          {productsArray.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))}
        </>
      )}
    </section>
  );
};
export default Products;
