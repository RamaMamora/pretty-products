import styles from "./footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="">Kontakt Os</a>
        <a href="">Kundeservice</a>
        <a href="">FAQ</a>
        <a href="">Handelsbetingelser</a>
      </div>

      <div className={styles.paragraph}>
        <p>Følg os på</p>
        <div className={styles.icon}>
          <FaInstagram size={30} />
          <FaFacebookF size={30} />
          <FaTiktok size={30} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
