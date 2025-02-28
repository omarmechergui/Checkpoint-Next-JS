// components/ProjectCard.js
import styles from './ProjectCard.module.css';

export default function ProjectCard({ title, description, image }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}