import { useState } from 'react';
import Link from 'next/link';
import Burger from './Burger';
import MobileNav from './MobileNav';
import { useRouter } from 'next/router';
import styles from '@/styles/Header.module.scss';

export default function Header() {
  const [mobNavOpen, setMobNavOpen] = useState(false);
  const router = useRouter();

  const active = `${styles['header__link']} ${styles['header__link--active']}`;

  function toggleMobileNav() {
    setMobNavOpen(!mobNavOpen)
  };

  return (
    <header className={`${styles.header} ${styles["header--container"]}`}>
      <div className={`${styles.header__logo} ${mobNavOpen && styles['header__logo--active']}`}>
        Chris Meade<span className={styles["header__logo--green"]}>Web Developer</span>
      </div>
      <nav className={styles.desktopNav}>
        <ul className={styles.header}>
          <li>
            <Link href="/about" className={router.pathname === '/about' ? active : styles.header__link}>
              <span className={styles['header__link--green']}>01.</span> About
            </Link>
          </li>
          <li>
            <Link href="/projects" className={router.pathname === '/projects' ? active : styles.header__link}>
              <span className={styles['header__link--green']}>02.</span> Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className={router.pathname === '/contact' ? active : styles.header__link}>
              <span className={styles['header__link--green']}>03.</span> Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Burger navOpen={mobNavOpen} toggleNav={toggleMobileNav} />
      <MobileNav open={mobNavOpen} router={router} />
    </header>
  );
}
