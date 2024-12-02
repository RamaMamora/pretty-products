import styles from "./sectionHeader.module.css";
const SectionHeader = ({ title }) => {
  return (
    <header className={styles.section}>
      <h2>{title}</h2>
    </header>
  );
};
export default SectionHeader;
