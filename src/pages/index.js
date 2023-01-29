import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LetsTalk from '@/components/LetsTalk';
import ProjectsDemo from '@/components/ProjectsDemo';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <>
      <Head>
        <title>Chris Meade Web Developer</title>
        <meta name="description" content="Welcome to my portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ position: 'relative', maxWidth: '100vw', overflow: 'hidden' }}>
        <Header />
        <Hero />
        <Skills />
        <ProjectsDemo />
        <LetsTalk />
      </main>
    </>
  );
}
