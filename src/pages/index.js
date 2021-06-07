import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>This is my only paragraph.</p>
      <StaticImage
        alt="This is a 7x7 grid partitioned into seven equal-sized pieces."
        src="../images/7x7.png"
      />
    </Layout>
  )
}

export default IndexPage