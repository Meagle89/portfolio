import styles from '@/styles/LetsTalk.module.scss';
import buttonStyles from '@/styles/Buttons.module.scss';
import Link from 'next/link';

export default function LetsTalk() {
  return (
    <section className={`${styles.letsTalk} container`}>
      <div className={styles.letsTalk__content}>
        <h1 className={styles.letsTalk__title}>Let's talk about your ideas!</h1>

        <div className={styles.letsTalk__button}>
          <Link href="/contact" className={buttonStyles.button}>
            Contact me
          </Link>
        </div>
      </div>
    </section>
  );
}
