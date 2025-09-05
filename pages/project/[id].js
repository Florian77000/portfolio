import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from '../../styles/ProjectId.module.css'

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query; // récupère l'id depuis l'URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:3000/projects/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.result) {
          setProject(data.data);
        }
      });
  }, [id]);

  if (!project) return <p>Erreur chargement</p>;

  return (
    <div className={styles.mainId}>
      <div className={styles.titleId}>
        <h1>{project.title}</h1>
      </div>
      
      <div className={styles.mainCard}>
        <div className={styles.leftCard}>
          <img className={styles.img} src={project.image}></img>
        </div>
        <div className={styles.rightCard}>
          <div className={styles.descriptionCard}>
            <p>{project.description}</p>
          </div>
          <div className={styles.image2Card}>
            <p>affichage de la petite image</p>
          </div>
        </div>
      </div>

    </div>
  );
}