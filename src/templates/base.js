import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Content, { HTMLContent } from "../components/Content"
import SEO from "../components/seo"
export const BaseTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section contain">
      <SEO title={title} />

      <div className="section">
        <h2 className="title is-size-4 has-text-weight-bold is-bold-light">
          {title}
        </h2>
        <PageContent className="content" content={content} />
      </div>
    </section>
  )
}

BaseTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const BasePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <BaseTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

BasePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BasePage

export const basePageQuery = graphql`
  query BasePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
