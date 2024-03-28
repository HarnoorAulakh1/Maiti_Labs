import Card from "./Card";
import styles from "./Card.module.css";

function Frame() {
  return (
    <div className={styles.frame}>
      <p className={styles.frame1}>
        All DeCarbonn projects meet these rigorous criteria:
      </p>
      <div className={styles.stack}>
        <Card
          img="https://framerusercontent.com/images/3nk2pS7eJooVHQdhmN353oRvS1M.jpg"
          para="We carefully check how much CO₂ is offset by each project, so we can promise you lasting impact."
          head="Precise Tracking"
        />
        <Card
          img="https://framerusercontent.com/images/4ONRttsDGrxbroSNZNdIK5aWJ4.jpg"
          para="Our projects wouldn't happen without your support. With DeCarbonn, your money makes a real impact."
          head="Every dollar makes a difference"
        />
        <Card
          img="https://framerusercontent.com/images/pjSkqy8upoBXTnBcSauCoUvbhI.jpg"
          para="We make sure all our projects are vetted by Internationally recognized issuers like Verra, Gold Standard, CSI etc"
          head="Internationally Recognized Credits Issuer"
        />
        <Card
          img="https://framerusercontent.com/images/i2obQbVx8he4i4JwhONi4DEy7wY.jpg"
          para="We get data straight from projects on the ground, so you can track your impact, month by month."
          head="Regular Updates"
        />
      </div>
    </div>
  );
}

export default Frame;
