import styles from './Card.module.css';

// eslint-disable-next-line react/prop-types
function Card({img,head,para}){
    return (
        <div className={styles.card}>
            <img className={styles.image} src={img} alt="" />
            <div className={styles.content}>
                <p className={styles.contentH}>{head}</p>
                <p className={styles.contentP}>{para}</p>
            </div>
        </div>
    )
}

export default Card;