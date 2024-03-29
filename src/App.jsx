import Navbar from "./components/navbar/Navbar.jsx";
import styles from "./App.module.css";
import Stack from "./components/stack/Stack";
import Frame from "./components/cards/Frame";
import Container from "./components/accordian/Container";

function App() {
  return (
    <div className={styles.outer}>
      <Navbar />
      <div className={styles.intro}>
        <p>Decarbonn your business by investing in carbon offset projects.</p>
      </div>
      <div className={styles.search}>
        <p>we search India for climate project with the highest impact</p>
      </div>
      <div className={styles.buttons}>
      <button className={styles.connect2}>
        <p>CONNECT.</p>
      </button>
      <button className={styles.getintouch}>
        <p>GET IN TOUCH</p>
      </button>
      </div>
      <div
        className={styles.fake}
        data-framer-background-image-wrapper="true"
      ></div>
      <Stack />
      <Frame />
      <Container/>
    </div>
  );
}

export default App;
