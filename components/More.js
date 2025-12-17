import styles from '../styles/More.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faComments, faShield } from '@fortawesome/free-solid-svg-icons'

export default function More () {
    return (
        <div className={styles.more}>
           <h1>Pourquoi me confier vos projets?</h1>
            
            <div className={styles.card}>
                <div className={styles.cardIn}>
                    <FontAwesomeIcon icon={faGear} size="2xl" />
                    <h2 className={styles.title}>Une approche consciencieuse</h2>
                    <p>Là où certains automatisent tout, je travaille avec rigueur et précision pour que chaque détail de votre site reflète la qualité de votre travail.</p>
                </div>
                <div className={styles.cardIn}>
                    <FontAwesomeIcon icon={faComments} size="2xl" />
                    <h2 className={styles.title}>Une écoute active</h2>
                    <p>Une écoute attentive pour comprendre votre métier et vos objectifs;
                    je m'imprègne de votre savoir-faire pour créer une structure de site 
                    qui valorise réellement votre expertise.</p>
                </div>
                <div className={styles.cardIn}>
                    <FontAwesomeIcon icon={faShield} size="2xl" />
                    <h2 className={styles.title}>Transparence et fiabilité</h2>
                    <p>Je me concentre sur ce que je maîtrise parfaitement pour vous garantir un site performant et livré dans les délais.</p>
                </div>
            </div>
        </div>
    )
}