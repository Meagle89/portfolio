import styles from '@/styles/Footer.module.scss';
import buttonStyles from '@/styles/Buttons.module.scss';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h1 className={styles.footer__title}>Let's talk</h1>
      </div>

      <div className={styles.footer__button}>
        <Link href="/contact" className={buttonStyles.button}>Contact me</Link>
      </div>
    </footer>
  );
}
