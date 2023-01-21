import Link from 'next/link';
import styles from '@/styles/Hero.module.scss';
import Down from '@/icons/Down';
import buttonStyles from '@/styles/Buttons.module.scss';
import Particles from 'react-tsparticles';
import { useCallback } from 'react';
import { loadFull } from 'tsparticles';

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className={styles.hero}>
      <Particles
          init={particlesInit}
          loaded={particlesLoaded}
          id="tsparticles"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            pointerEvents: "none"
          }}
          options={{
            backgroundMode: {
              enable: true,
              zIndex: -1,
            },
            background: {
              color: {
                value: 'transparent',
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: 'canvas',
              events: {
                onClick: { enable: true, mode: 'repulse' },
                onHover: {
                  enable: true,
                  mode: 'bubble',
                  parallax: { enable: false, force: 2, smooth: 10 },
                },
                resize: true,
              },
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 0.3,
                opacity: 1,
                size: 4,
                speed: 1,
              },
              grab: { distance: 400, line_linked: { opacity: 0.5 } },
              push: { particles_nb: 4 },
            },
            particles: {
              color: { value: 'random' },

              move: {
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
                direction: 'none',
                enable: true,
                outMode: 'out',
                random: false,
                size: true,
                speed: 0.1,
                straight: false,
              },
              number: { density: { enable: true, area: 800 }, value: 100 },
              opacity: {
                random: true,
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
            },
            detectRetina: true,
            fullScreen: { enable: false }
          }}
        />
          

      <div className={styles.hero__content}>
        <h1>
          <span>Hello,</span>
          <br />
          <span>
            I am <span className={styles['hero__content--green']}>Chris</span>,
          </span>
          <br />
          <span>Web Developer</span>
        </h1>
        <p>Currently located in Surrey, I specialize in building dynamic and responsive web experiences.</p>
        <div className={styles.hero__content__link}>
          <Link href="/contact" className={buttonStyles.button}>
            Get in touch!
          </Link>
        </div>
      </div>
      <div className={styles['hero__content__icon--container']}>
        <Down className={styles['hero__content__icon--top'] + ' ' + styles['hero__content__icon'] + ' ' + styles['hero__content__icon--translate']} />

        <Down className={styles['hero__content__icon--middle'] + ' ' + styles['hero__content__icon'] + ' ' + styles['hero__content__icon--translate']} />

        <Down className={styles['hero__content__icon--bottom'] + ' ' + styles['hero__content__icon--translate']} />
      </div>
    </div>
  );
}
