import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Content, { HTMLContent } from "../components/Content"
import SEO from "../components/seo"
import VideoHero from "../components/VideoHero"
export const IndexPageTemplate = ({
  title,
  heading,
  featured,
  main,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <>
      <section className="section contain">
        <div className="container">
          <div>
            <div className="section">
              <div className="tile is-ancestor is-vertical">
                <div className="tile">
                  <div className="tile is-parent">
                    <div className="is-child notification is-primary tile">
                      <h2 className="title is-size-2">{main.title}</h2>
                      <h4 className="subtitle is-size-4">{main.description}</h4>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <div className="is-child notification is-white tile">
                      <h4 className="subtitle is-size-4">{main.featured}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoHero />
      <div className="section contain">
        <div className="is-ancestor tile">
          <article className="tile is-parent is-primary">
            <PageContent
              className="tile is-child content is-size-4"
              content={content}
            />
          </article>
        </div>
      </div>
    </>
  )
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  heading: PropTypes.string,
  featured: PropTypes.string,
  main: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO title="Lumiri Home" />
      <IndexPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        heading={post.frontmatter.heading}
        featured={post.frontmatter.featured}
        main={post.frontmatter.main}
        content={post.html}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const IndexPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        main {
          title
          description
          featured
        }
      }
    }
  }
`
