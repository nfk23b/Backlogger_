import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@styles/Home.module.scss'
import WelcomeBanner from '@components/WelcomeBanner'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Backlogger</title>
      </Head>
      <WelcomeBanner />
    </div>
  )
}

export default Home
