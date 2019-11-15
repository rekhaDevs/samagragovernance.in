import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql} from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
                                      title,
                                      description
                                  }) => (
    <div>
        Hello
    </div>
);

const IndexPage = ({data}) => {
    const {frontmatter} = data.markdownRemark;
    return (
        <Layout>
            <IndexPageTemplate
                title={frontmatter.title}
                description={frontmatter.description}
            />
        </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        description
        baseBanner {
            titleLines {
                text
            }
        }
        secondSection {
         title
         ourApproach {
            title
         }
         ourModel {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            description {
                text
                subTitle
            }
         }
        }
      }
    }
  }
`
