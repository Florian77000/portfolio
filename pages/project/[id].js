import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from '../../styles/ProjectId.module.css';

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query; // récupère l'id depuis l'URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`https://portfolio-backend-qlss.vercel.app/projects/${id}`)
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
          <img className={styles.img} src={project.imageMain}></img>
        </div>
        <div className={styles.rightCard}>
          <div className={styles.descriptionCard}>
            <p>{project.description}</p>
            <a href={project.urlWeb} target="_blank" rel="noopener noreferrer" className={styles.a}><button className={styles.btn}>Voir le projet</button></a>
          {/* noopener permet de ne pas regarder sur ma page web d'origine (window opener) */}
          {/* noreffer permet de ne pas savoir d'où l'on vient */}
          </div>
          <div className={styles.image2Card}>
            <img className={styles.img} src={project.imageSecond}></img>
          </div>
        </div>
      </div>
    </div>
  );
}