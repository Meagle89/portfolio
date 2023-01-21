import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Chris Meade Web Developer</title>
        <meta name="description" content="Welcome to my portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ position: 'relative', overflow: 'hidden', height: '100vh'}}>
        <Header />
        <Hero />
      </main>
    </>
  );
}
