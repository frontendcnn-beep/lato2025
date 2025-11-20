import Modal from '../../Modal/Modal';
import styles from './Home.module.css';
import { useState } from 'react';


export const Home = () => {

    const [mostrar, setMostrar] = useState(false);

    return (
        <section className={styles.containerBox}>
            <div className={styles.containerHome}>
                <div className={styles.box}>
                    <p className={styles.title}>
                        Frontend <br /> Developed
                    </p>
                    <p className={styles.pos}>Lato 2025</p>
                    <button className={styles.button} onClick={() => setMostrar(true)}>
                        Explore mais!
                    </button>


                    <div className={styles.dflex}>
                        <span>
                            <i className='fa-solid fa-bars'></i>
                        </span>
                        <p>
                            Front end com html, css, js, tailwind, react e jsx.
                        </p>
                    </div>
                    <div className={styles.dflex}>
                        <span>
                            <i className='fa-solid fa-bars'></i>
                        </span>
                        <p>
                            Análise backend em Node.js e NoSQL e MySql
                        </p>
                    </div>
                </div>
            </div>

            {
                mostrar && (
                    <>
                        <p>eu tibes</p>

                        <button onClick={() => setMostrar(false)}>
                            clique para fechar!
                        </button>
                    </>
                )
            }


        </section>
    )
}

