import { useState, useEffect } from 'react'
import styles from '../styles/Project.module.css';
import Link from'next/link';

export default function Project () {

    const [project, setProject] = useState([])
    useEffect(() => {
    fetch("http://localhost:3000/projects")
    .then((response) => response.json())
    .then((data) => {
        setProject(data.data)
    })
    }, []);

    const viewProject = project.map((e,i) => (
        <Link key={i} href={`/project/${e._id}`} passHref>
            <div className={styles.cardContainerProject} key={i}>
                <div className={styles.cardProject}>
                    <div className={styles.cardImageProject}>
                        <img className={styles.imgProject} src={e.imageMain}></img>
                    </div>
                    <div className={styles.cardTexteProject}>
                        <div className={styles.titleProject}>
                            <h3 className={styles.h3Project}>{e.title}</h3>
                            <p className={styles.descriptionProject}>{e.description}</p>
                        </div>
                        <div className={styles.cardBtnProject}>
                            {e.button.map((btn, idx) => (
                            <button key={idx} className={styles.btnProject}>
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
        <div className={styles.mainProject}>
            <div className={styles.mainTitleProject}>
                 <h1>Mes projets</h1>
            </div>
        {viewProject}
    </div>
    )};
