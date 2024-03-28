import Content from "./Content";
import styles from "./Stack.module.css";
function Stack() {
  return (
    <div className={styles.stackMain}>
      <div className={styles.flex}>
        <div className={styles.frame1}></div>
        <Content
          p1="Calculate your carbon footprint"
          p2="Use our open source calculator to find out how much CO2 your business emits."
          btn="calculator"
        />
      </div>
      <div className={styles.flex}>
        <div className={styles.frame2}></div>
        <Content
          p1="Connect with a Projects and Invest"
          p2="Choose a project and we'll connect you with the on-ground team before you invest."
          btn="Projects"
        />
      </div>
      <div className={styles.flex}>
        <div className={styles.frame3}></div>
        <Content
          p1="Earn Credits and Track your investments"
          p2="Receive your carbon credits in your wallet and track your investments impact every month."
        />
      </div>
      
      <div className={styles.stack1}>
        <Content
          p1="Calculate your carbon footprint"
          p2="Use our open source calculator to find out how much CO2 your business emits."
          btn="calculator"
        />
        <div className={styles.frame1}></div>
      </div>
      <div className={styles.stack2}>
        <div className={styles.frame2}></div>
        <Content
          p1="Connect with a Projects and Invest"
          p2="Choose a project and we'll connect you with the on-ground team before you invest."
          btn="Projects"
        />
      </div>
      <div className={styles.stack2}>
        <Content
          p1="Earn Credits and Track your investments"
          p2="Receive your carbon credits in your wallet and track your investments impact every month."
        />
        <div className={styles.frame3}></div>
      </div>
    </div>
  );
}

export default Stack;
