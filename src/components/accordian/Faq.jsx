import styles from "./Accordian.module.css";

// eslint-disable-next-line react/prop-types
function Faq({ question }) {
  return (
      <div className={styles.heading}>
        <p className={styles.text}>{question}</p>
        <p className={styles.arrow}>ᐯ</p>
    </div>
  );
}

export default Faq;
