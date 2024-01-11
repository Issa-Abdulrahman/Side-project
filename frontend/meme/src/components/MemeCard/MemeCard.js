import styles from"./MemeCard.module.css";
const MemeCard = () =>{
    return (
        <main className={styles.main}>
            <article className={styles.memeCard}>
                <img src="" alt="meme image" className={styles.image}/>
                    <div className={styles.wrapperCard}>
                        <div  className={styles.cardDetails}>
                            <p>caption goes here</p>
                            <p>first name and last name</p>
                        </div>
                    </div>
            </article>
        </main>
    )
}

export default MemeCard;