import Link from 'next/link';
import styles from '@/styles/MobileNav.module.scss';
import Image from 'next/image';
import About from '@/icons/About';
import Email from '@/icons/Email';
import Work from '@/icons/Work';

export default function MobileNav({ open, router }) {
  return (
    <nav className={`${styles.mobileNav} ${open && styles['mobileNav--active']}`}>
      <Image src="/profile.webp" alt="my profile picture" height="128" width="128" />

      <div className={`${styles.mobileNav__logo}`}>
        Chris Meade<span className={styles['mobileNav__logo--green']}>Web Developer</span>
      </div>

      <ul className={styles.mobileNav__links}>
        <li>
          <Link className={router.pathname === '/about' ? active : styles['mobileNav__links--link']} href="/about">
            <About className={styles['mobileNav__links--link--green']} />
          </Link>
        </li>
        <li>
          <Link className={router.pathname === '/projects' ? active : styles['mobileNav__links--link']} href="/projects">
            <Work className={styles['mobileNav__links--link--green']} />
          </Link>
        </li>
        <li>
          <Link className={router.pathname === '/contact' ? active : styles['mobileNav__links--link']} href="/contact">
            <Email className={styles['mobileNav__links--link--green']} />
          </Link>
        </li>
      </ul>

      <div className={styles.blob}></div>
    </nav>
  );
}
