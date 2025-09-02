import styles from '../styles/Contact.module.css'

export default function Contact () {
    return (
        <div className={styles.mainContact}>
            <h1 className={styles.h1}>Contact</h1>
            <div className={styles.containerContact}>
                <div className={styles.form}>
                    <input className={styles.input} placeholder='nom'></input>
                    <input className={styles.input} placeholder='email'></input>
                    <input className={styles.input} placeholder='recherche'></input>
                </div>
                <div className={styles.formBtn}>
                    <button className={styles.btn}>Envoyer</button>
                </div>
            </div>
        </div>
    )
}