import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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

  if (!project) return <p>Erreur chargemnt</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <div>
        {project.button?.map((btn, i) => (
          <button key={i}>{btn}</button>
        ))}
      </div>
    </div>
  );
}