import styles from '../styles/Project.module.css'

export default function Project () {
    return (
        <div className={styles.mainProject}>
            <h1>Mes projets</h1>
            <div className={styles.card}>
                <div className={styles.cardImage}>
                    affiche image
                </div>
                <div className={styles.cardTexte}>
                    <div className={styles.title}>
                        <h3>Titre</h3>
                        <p>Texte d'explication</p>
                    </div>
                    <div className={styles.cardBtn}>
                        <button className={styles.btn}>bouton 1</button>
                        <button className={styles.btn}>bouton 2</button>
                        <button className={styles.btn}>bouton 3</button>
                    </div>    
                </div>

            </div>
        </div>
    )
}