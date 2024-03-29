import styles from "./Stack.module.css";

// eslint-disable-next-line react/prop-types
function Content({ p1, p2, btn }) {
  return (
    <div className={styles.content1}>
      <p className={styles.p11}>{p1}</p>
      <p className={styles.p12}>{p2}</p>
      {btn == undefined ? (
        ""
      ) : (
        <button className={styles.button1}>
          <p className={styles.btn}>{btn}</p>
        </button>
      )}
    </div>
  );
}

export default Content;
