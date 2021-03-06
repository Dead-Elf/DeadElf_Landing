import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to Dead Elf Collectibles.</p>
    <p>New site is comming soon.</p>
    <p>
    <StaticImage
      src="../images/DEC-Color-ElfAlone.svg"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Dead Elf"
      style={{ marginBottom: `1.45rem` }}
    /></p>
  </Layout>
)

export default IndexPage
