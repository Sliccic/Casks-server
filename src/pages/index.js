

import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Online from '../components/online'
import Online2 from '../components/online2'
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>

      <Head>
      <title>{siteTitle}</title>
      </Head>

      <div class="home">

        <h1 class="title">
          天理服务器状态监测
        </h1>

        <div class="text-center py-4">
          
          <div class="stats bg-primary text-primary-content servers">
            <Online server="s1" />
            <Online server="s2" />
            <Online server="s4" />
            <Online2 server="sb" />
            <Online server="sgsr" />
            
            
          </div>

        </div>
        
        <p class="text-center">
          服务器地址是输入到代理里面的，请勿将其直接输入浏览器，不会请看下方教程<br/>
          电脑的端口留空或者输443就好 <br/>
        </p>

        <p class="description">
        <a href="https://casks.me" target="_blank" rel="sponsored">网站|教程</a>
        </p>

      </div>
    </Layout>
  )
}
