import type { NextPage } from 'next'
import Head from 'next/head'
import { WelcomeBanner, Listing } from '@src/index'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Backlogger</title>
      </Head>
      <WelcomeBanner />
      <Listing />
    </div>
  )
}

export default Home
