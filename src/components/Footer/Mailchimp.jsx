import styles from "./Footer.module.css";
function Mailchimp() {
  return (
    <div className={styles.mailchimp}>
      <input type="text" placeholder="Enter your email" />
      <button className={styles.btn}><p>Subscribe</p></button>
    </div>
  );
}

export default Mailchimp;
