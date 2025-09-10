import styles from '../styles/AboutMe.module.css';

export default function AboutMe () {
    return (
        <div id="apropos" className={styles.mainAboutMe}>
            <div className={styles.top}>
                <div className={styles.text}>
                    <span className={styles.span}>Qui suis-je? </span>
                    Fort de 14 années d'expertise dans les secteurs automobile et bancaire, j’ai
                    décidé de me réorienter vers le développement d’application web et mobile
                    fullstack JS.
                    Cette formation m'a permis d'acquérir une compréhension approfondie des
                    besoins utilisateurs et des exigences techniques. Mon parcours, initialement
                    centré sur le fullstack JS, va être enrichi par une formation complémentaire en
                    DevOps, me permettant ainsi d'appréhender les projets dans leur globalité.
                </div>
                <div className={styles.blocImg}>
                    <img className={styles.img} src='./me.png' alt='photo me representant en format cartoon'></img>
                </div>
            </div>

            <div className={styles.down}>
                <div className={styles.blocImg}>
                    <img className={styles.img} src='./computer.jpg' alt='photo me representant en format cartoon'></img>
                </div>
                <div className={styles.text}>
                    <span className={styles.span}>Qu'est ce qu'un développeur web? </span>
                    Le concepteur développeur web est un professionnel qui, 
                    à partir d’un cahier des charges, conçoit et développe des sites web et des applications web.
                    il crée des sites et applications web qui captivent, informent et interagissent. Il concrétise 
                    les idées en plateformes web interactives, fonctionnelles, esthétiques et sécurisés. De l'ébauche d'un site à son 
                    déploiement final, son savoir-faire est essentiel pour garantir une expérience utilisateur optimale. 
                </div>
            </div>
        </div>
    )
}