import styles from '@/styles/ProjectsDemo.module.scss';
import buttonStyles from '@/styles/Buttons.module.scss';
import Link from 'next/link';

export default function ProjectsDemo() {
  return (
    <section className={`container__pl container--bg-grey flex`}>
      <div className={`flex ${styles.projectsDemo__content}`}>
        <h3 className={styles.projectsDemo__title}>
        Explore my creations and inspirations
        </h3>
        <div className={buttonStyles['button__container--secondary']}>
          <Link href="/projects" className={buttonStyles.button}>
            See more
          </Link>
        </div>
      </div>
      <div className={styles.projectsDemo__grid}>
        <div className={styles['projectsDemo__grid--item']}></div>
        <div className={styles['projectsDemo__grid--item']}></div>
        <div className={styles['projectsDemo__grid--item']}></div>
        <div className={styles['projectsDemo__grid--item']}></div>
        <div className={styles['projectsDemo__grid--item']}></div>
        <div className={styles['projectsDemo__grid--item']}></div>
        <div className={styles['projectsDemo__grid--item']}></div>
        <div className={styles['projectsDemo__grid--item']}></div>
        <div className={styles['projectsDemo__grid--item']}></div>
      </div>
    </section>
  );
}
