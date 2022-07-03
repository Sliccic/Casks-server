import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Online from '../components/online'
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
          欢迎来到 {siteTitle}
        </h1>

        <p class="description">
          测试服开着呢，但是这个破玩意不能取没装证书的服
        </p>

        <div class="text-center py-3">
          
          <div class="stats bg-primary text-primary-content">
            <Online server="天理一服" />
            <Online server="天理二服" />
            <Online server="天理测试服" />
          </div>

        </div>
        
        <p class="footer">
          一服电脑：1.casks.me 手机：https://1.casks.me <br/>
          二服电脑：2.casks.me 手机：https://2.casks.me <br/>
          测试服电脑：test.casks.me 手机：https://test.casks.me
        </p>

        <p class="description">
        <a href="https://casks.me" target="_blank" rel="sponsored">网站|教程</a>
        </p>

      </div>
    </Layout>
  )
}
