import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <div className={styles.img}></div>
        <p>DeCarbonn</p>
      </div>
      <button className={styles.menu}>
        Menu
      </button>
      <div className={styles.stack}>
        <p className={styles.links}>Home</p>
        <p className={styles.links}>Projects</p>
        <p className={styles.links}>About</p>
        <button className={styles.connectButton}>
          <p className={styles.connectText}>Connect →</p>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
