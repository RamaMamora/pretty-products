import Favorites from "../components/favorites/Favorites";
import Newsletter from "../components/newsletter/Newsletter";
import PageHeader from "../components/pageHeader/PageHeader";
import SectionHeader from "../components/sectionHeader/SectionHeader";
import { useFetchProducts } from "../hooks/useFetchProducts";
import headerImg from "../assets/header.webp";
import MyFavorites from "../components/myFavorites/MyFavorites";

const Home = () => {
  // hvis jeg gerne vil hente headerimg fra json
  /*  const { furniture } = useFetchProducts(); */
  /*  const headerImg = furniture[1]?.images[1]; */

  /*  const { products } = useFetchProducts();
  console.log(products); */

  return (
    <article>
      <PageHeader
        title="Design og komfort til dit hjem"
        headerImg={headerImg}
      />
      <SectionHeader title="Kunders favoritter" />
      <Favorites />
      <SectionHeader title="Mine Favoritter" />
      <MyFavorites />
      <SectionHeader title="Tilmeld dig vores nyhedsbrev" />
      <Newsletter />
    </article>
  );
};
export default Home;
