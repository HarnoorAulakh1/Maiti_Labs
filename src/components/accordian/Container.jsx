import styles from './Accordian.module.css';
import Faq from './Faq';
import Footer from '../Footer/Footer';
function Container(){
    return (
        <div className={styles.container}>
            <p className={styles.header}>Frequently asked questions</p>
            <div className={styles.questions}>
                <Faq question="How do I invest in a Project?"/>
                <Faq question="Can I get more details on the project than already on the site?"/>
                <Faq question="When will I receive my Carbon Credits in my account?"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Container;