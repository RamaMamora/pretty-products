import "./App.css";
import Navigation from "./components/Navigation";
import { useRoutes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/footer/Footer";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/products", element: <Products /> },
    { path: "/product/:id", element: <ProductDetails /> },
    { path: "/about", element: <About /> },
  ]);

  return (
    <div className="app">
      <Navigation />
      <div className="content">{routes}</div>
      <Footer />
    </div>
  );
}

export default App;
