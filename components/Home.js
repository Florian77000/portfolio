import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.main}>

      {/* Barre de navigation du site */}
      <navbar className={styles.navbar}>
        <li>A propos</li>
        <li>Mes formations</li>
        <li>Mes projets</li>
        <li>Contact</li>
      </navbar>
      
      {/* Partie de présentation du site, accroche du site */}
      <div className={styles.hero}>
        <h1>Bonjour je m'appelle Florian,
           concepteur développeur web junior.</h1>
           <h3>
             Passionné par la création de solutions modernes et 
             performantes. je vous accompagne dans toutes les étapes 
             de votre projet digital : de l’analyse du besoin à la 
             conception, du développement au déploiement. 
             Mon objectif est de réaliser des sites web et applications 
             à la fois esthétiques, intuitifs et robustes, tout en 
             garantissant une expérience utilisateur optimale.
           </h3>
      </div>

      <div className={styles.button}>
        <button>Contactez moi</button>
      </div>

      <div className={styles.image}>
        <img src='' alt='lien linkedin'></img>
        <img src='' alt='lien github'></img>
      </div>
    </div>
  );
}

export default Home;
