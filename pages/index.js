import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

import { PrismicText, PrismicRichText } from '@prismicio/react'
import { createClient } from '../prismicio'

export async function getStaticProps() {
  // Client used to fetch CMS content.
  const client = createClient()

  // Page document for our homepage from the CMS.
  const page = await client.getByUID('page', 'home')

  // Pass the homepage as prop to our page.
  return {
    props: { page },
  }
}

export default function Home({ page }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <PrismicRichText field={page.data.greeting} />
      </section>
      <section>
        <PrismicRichText field={page.data.description}  />
      </section>
    </Layout>
  )
}