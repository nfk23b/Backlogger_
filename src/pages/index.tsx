import type { NextPage } from 'next'
import Head from 'next/head'
import WelcomeBanner from '@components/WelcomeBanner'
import Listing from '@components/Listing'

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
