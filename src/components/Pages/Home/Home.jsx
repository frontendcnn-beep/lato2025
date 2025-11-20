import styles from './Home.module.css';

export const Home = () => {
    return (
        <section className={styles.containerBox}>
            <div className={styles.box}>
                <p className={styles.title}>
                    Developed <br />Frontend
                </p>
                <p className={styles.pos}>POS 2025</p>
                <p className={styles.button}>
                    Explore mais!
                </p>


                <div className={styles.dflex}>
                    <span>
                        <i className='fa-solid fa-bars'></i>
                    </span>
                    <p>
                        oi aquie os demais itemss

                    </p>
                </div>
                <div className={styles.dflex}>
                    <span>
                        <i className='fa-solid fa-bars'></i>
                    </span>
                    <p>
                        oi aquie os demais itemss

                    </p>
                </div>
            </div>
        </section>
    )
}

