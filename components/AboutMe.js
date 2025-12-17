import styles from '../styles/AboutMe.module.css';
import Link from 'next/link';

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
                    <span className={styles.span}>Pour qui?</span>
                    <p>Vous êtes un professionnel et vous souhaitez développer votre visibilité ou 
                    attirer de nouveaux clients grâce à internet ?
                    J'accompagne les indépendants, artisans et entrepreneurs dans la création de 
                    leur site vitrine personnalisé.
                    Mon objectif est simple: transformer votre savoir-faire en une présence en ligne 
                    élégante, professionnelle et parfaitement adaptée à vos besoins.
                    Ce que je réalise pour vous : Je gère votre projet de A à Z : de 
                    la structure des pages à la mise en ligne, en passant par l'optimisation pour
                    le référencement local (SEO) 
                    afin que vos clients puissent vous trouver facilement sur Google: <Link href='#contact'><button className={styles.btnContact}>Me contacter</button></Link>
                    </p>
                </div>
            </div>
        </div>
    )
}