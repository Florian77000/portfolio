import { useState, useEffect } from 'react'
import styles from '../styles/Project.module.css';
import Link from'next/link';

export default function Project () {

    const [project, setProject] = useState([])
    useEffect(() => {
    fetch("https://portfolio-backend-tau-gold.vercel.app/projects")
    .then((response) => response.json())
    .then((data) => {
        setProject(data.data)
    })
    }, []);

    const viewProject = project.map((e,i) => (
        <Link key={i} href={`/project/${e._id}`} passHref>
            <div className={styles.cardContainer} key={i}>
                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <img className={styles.img} src={e.imageMain}></img>
                    </div>
                    <div className={styles.cardTexte}>
                        <div className={styles.title}>
                            <h3 className={styles.h3}>{e.title}</h3>
                            <p className={styles.description}>{e.description}</p>
                        </div>
                        <div className={styles.cardBtn}>
                            {e.button.map((btn, idx) => (
                            <button key={idx} className={styles.btn}>
                            {btn}
                            </button>
                            ))}
                        </div>    
                    </div>
                </div>
            </div>
        </Link>
    ));
    return (
        <div id="project" className={styles.mainProject}>
            <div className={styles.mainTitle}>
                 <h1>Mes projets</h1>
            </div>
        {viewProject}
    </div>
    )};
