import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>News App - Home </title>
      </Head>
      <h1>Aprendiendo Next.js desde cero</h1>
      <style jsx>{`
      div {
        display: grid;
        place-content: center;
        height: 100vh;
      }
      `}</style>
    </div>
  )
}
