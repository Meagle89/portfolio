import styles from '@/styles/Burger.module.scss';

export default function Burger({ navOpen, toggleNav }) {
  return (
    <nav>
      <button onClick={toggleNav} type="button" className={`${styles.burger} ${navOpen && styles['burger--active']}`}>
        <div className={`${styles.burger__line} ${styles['burger__line--one']}`}></div>
        <div className={`${styles.burger__line} ${styles['burger__line--two']}`}></div>
        <div className={`${styles.burger__line} ${styles['burger__line--three']}`}></div>
      </button>
    </nav>
  );
}
