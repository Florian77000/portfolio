import styles from '../styles/Education.module.css'

export default function Education () {

    // tableau pour stocker les chemins d'images
    const image =[
        {src:'./html.png', alt:'image du logo html'},
        {src:'./css.png', alt:'image du logo css'},
        {src:'./js.png', alt:'image du logo js'},
        {src:'./react.png', alt:'image du logo react'},
        {src:'./git.png', alt:'image du logo git'},
        {src:'./github2.png', alt:'image du logo github2'},
        {src:'./mongo.png', alt:'image du logo mongo'},
    ]

    //tableau pour stocker les formations
    const education =[
        {title:'Développeur application web et mobile', sousTitle:'La capsule', btn: ['React','NodeJs','MongoDB']},
        {title:'Développeur application web et mobile', sousTitle:'Studi', btn:['HTML','CSS','PHP','JavaScript', 'WorPress', 'MySql']},
    ]

    return (
        <div id="formation" className={styles.mainEducation}>
            <div className={styles.skills}>
                <h1 className={styles.h1}>Mes skills</h1>
                <div className={styles.blocImg}>
                    {image.map((e,i) => (
                        <img key={i}
                        className={styles.img}
                        src={e.src}
                        alt={e.alt}
                        />
                    ))}
                </div>
            </div>

            <div className={styles.scholl}>
                <h1 className={styles.h1}>Mes formations suivies</h1>
                <div className={styles.blocCard}>
                        {education.map((e,i) => (
                            <div key={i} className={styles.card}>
                                <div className={styles.cardTitle}>
                                    <h3>{e.title}</h3>
                                    <h6>{e.sousTitle}</h6>
                                </div>
                                <div className={styles.btnGroup}>
                                    {e.btn.map((e,j)=> (
                                         <button key={j} className={styles.btn}>{e}</button>
                                    ))}
                                  </div> 
                            </div>
                        ))}  
                </div>
            </div>
        </div>
    )
}