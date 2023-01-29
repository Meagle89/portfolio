import styles from '@/styles/Skills.module.scss';

const words = [
  {
    word: 'JavaScript',
    size: 30,
    tooltip: 'JavaScript is a programming language used for web development and creating interactive web elements.',
  },
  {
    word: 'React',
    size: 28,
    tooltip: 'React is a JavaScript library for building user interfaces.',
  },
  {
    word: 'CSS',
    size: 20,
    tooltip: 'CSS is a language used for styling and layout of HTML documents.',
  },
  {
    word: 'Tailwind',
    size: 22,
    tooltip: 'Tailwind is a CSS framework for creating fast-loading, highly-readable, and fully-responsive user interfaces.',
  },
  {
    word: 'SCSS',
    size: 18,
    tooltip: 'SCSS is a CSS pre-processor that extends the capabilities of CSS with variables, mixins, and functions.',
  },
  {
    word: 'Less',
    size: 18,
    tooltip: 'Less is a CSS pre-processor that extends the capabilities of CSS with variables, mixins, and functions.',
  },
  {
    word: 'Liquid',
    size: 10,
    tooltip: "Liquid.js is a JavaScript implementation of Shopify's Liquid templating language, used for building e-commerce websites and other applications.",
  },
  {
    word: 'Shopify',
    size: 10,
    tooltip:
      'Shopify is a platform for building online stores, it offers a wide range of tools for creating and managing an e-commerce website, it also uses its own templating language called liquid.',
  },
  {
    word: 'HTML',
    size: 16,
    tooltip:
      'HTML (Hypertext Markup Language) is a standard markup language used to create and structure web pages, it gives the basic structure of a webpage and defines the content, images, videos, links, etc.',
  },
  {
    word: 'Next',
    size: 15,
    tooltip:
      'Next.js is a JavaScript framework for building server-rendered React applications, it allows developers to create fast and scalable apps with automatic code splitting, server-side rendering and more.',
  },
  {
    word: 'Zeplin',
    size: 8,
    tooltip:
      'Zeplin is a collaboration and handoff tool for web and mobile designers and developers, it allows teams to share design assets, generate code snippets, and ensure consistency across designs and implementations.',
  },
  {
    word: 'Git',
    size: 8,
    tooltip:
      'Git is a distributed version control system used for tracking changes in source code during software development, it allows multiple developers to work on the same project simultaneously and easily merge their changes.',
  },
  {
    word: 'BitBucket',
    size: 8,
    tooltip: 'Bitbucket is a web-based version control repository hosting service owned by Atlassian, it provides source code management (SCM) and allows teams to collaborate on code development, it supports Git and Mercurial version control systems and offers features such as pull requests and code reviews.',
  },
  { 
    word: 'Redux', 
    size: 16, 
    tooltip: 'Redux is a JavaScript library for managing the state of applications, it helps to keep the state of an application in a centralized store and allows for easy management of the state through actions and reducers.' 
  },
];

export default function Skills() {
  const canvasRadius = 200;
  const positions = [];

  return (
    <section className={`container flex`}>
      <div className={`${styles.skills__content} flex`}>
        <h2 className={styles.skills__title}>
          <span className={styles['skills__title--green']}>Skills </span>
          and tools
        </h2>
        <p className={styles.skills__text}>These are some of the skills I use day-to-day along with some new skills I am practising.</p>
      </div>

      <div className={styles.skills__cloud}>
        {words.map((word, index) => {
          const { x, y } = getWordPos(word.size, canvasRadius, positions);
          return (
            <p href={word.url} key={index} style={{ fontSize: `${word.size}px`, position: 'absolute', top: `${y}px`, left: `${x}px` }}>
              {word.word}
            </p>
          );
        })}
      </div>
    </section>
  );
}

function getWordPos(wordRadius, canvasRadius, prev = [] ) {
  let posX;
  let posY;
  do {
    posX = Math.floor(Math.random() * (canvasRadius * 2 - 1));
    posY = Math.floor(Math.random() * (canvasRadius * 2 - 1));
  } while (Math.sqrt(Math.pow(canvasRadius - posX, 2) + Math.pow(canvasRadius - posY, 2)) > canvasRadius - wordRadius && (!prev.some(e => { return e.x === posX && e.x > posX + 200 && e.x < posX - 200 })));

  prev.push({ x: posX, y: posY })

  return { x: posX, y: posY };
}
