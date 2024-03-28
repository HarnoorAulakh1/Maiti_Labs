import styles from "./Footer.module.css";
import Mailchimp from "./Mailchimp";
import Stacks from "./Stacks";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.flex}>
      <div className={styles.logo}>
        <div className={styles.frame}>
          <div className={styles.img}></div>
        </div>
        <p>DeCarbonn</p>
      </div>
      <p className={styles.query}>Have any query?</p>
      <Mailchimp />
      </div>
      <p className={styles.endText}>Made with ❤️ at MaitiLabs</p>
      <div className={styles.stacks}>
        <Stacks heading="SOCIAL" items={["Linkedin","Instagram","Facebook"]}/>
        <Stacks heading="COMPANY" items={["Home","Project","About"]}/>
        <Stacks heading="INNITIATIVES" items={["Maiti Labs","DeCarbonn","GreenBit"]}/>
      </div>
      <p className={styles.copyright}> copyright © 2024 DeCarbonn</p>
    </footer>
  );
}

export default Footer;
