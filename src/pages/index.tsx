import { useEffect, useState } from 'react';
import { getCookie } from 'cookies-next';
import type { NextPage } from 'next'
import { GetStaticProps } from "next";
import Head from 'next/head'
import { WelcomeBanner, Listing } from '@src/index'
import { getProps } from '@helpers/index';

export const getStaticProps: GetStaticProps = async () => {
  return getProps()
}

interface StaticProps {
  data: [];
}

const Home: NextPage<StaticProps> = ({data}) => {

  return (
    <div>
      <Head>
        <title>Backlogger</title>
      </Head>
      <WelcomeBanner />
      <Listing data={data}/>
    </div>
  )
}

export default Home
