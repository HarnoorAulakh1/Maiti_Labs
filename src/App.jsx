import Navbar from "./components/navbar/Navbar.jsx";
import styles from "./App.module.css";
import Stack from "./components/stack/Stack";
import Frame from "./components/cards/Frame";
import Container from "./components/accordian/Container";

function App() {
  return (
    <div>
      <Navbar />
      <div className={styles.intro}>
        <p>Decarbonn your business by investing in carbon offset projects.</p>
      </div>
      <div className={styles.search}>
        <p>we search India for climate project with the highest impact</p>
      </div>
      <button className={styles.connect2}>
        <p>CONNECT.</p>
      </button>
      <button className={styles.getintouch}>
        <p>GET IN TOUCH</p>
      </button>
      <div
        className={styles.fake}
        data-framer-background-image-wrapper="true"
      ></div>
      <p className={styles.goal}>Our goal is to simplify & enhance climate action.</p>
      <Stack />
      <Frame />
      <Container/>
    </div>
  );
}

export default App;
