import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <div className={styles.img}></div>
        <p>DeCarbonn</p>
      </div>
      <div className={styles.stack}>
        <p className={styles.home}>Home</p>
        <p className={styles.project}>Projects</p>
        <p className={styles.about}>About</p>
        <button className={styles.connectButton}>
            <p>Connect →</p>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
