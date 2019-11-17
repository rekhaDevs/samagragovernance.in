import React from 'react'
import PropTypes from 'prop-types'
import {kebabCase} from 'lodash'
import Helmet from 'react-helmet'
import {graphql, Link} from 'gatsby'
import Layout from '../components/Layout'
import Content, {HTMLContent} from '../components/Content'
import MediaRoll from "../components/MediaRoll";

const MediaPage = ({data}) => {
    const {markdownRemark: post} = data;

    return (
        <Layout>
            <div className={'home-top-slider-wrapper media-page-banner'}
                 style={{
                     height: '600px',
                     backgroundImage: `url(https://api.samagragovernance.in/blog/blog-header-bg.jpg)`
                 }}>
                <div className="translucent-dark-overlay" style={{height: 'auto'}}>
                </div>
                <div className=" container content-section">
                    <div className="title">
                        Samagra in News
                    </div>
                </div>
            </div>
            <section className="section">
                <div className="container-fluid">
                    <div className="content">
                        {/*<MediaRoll/>*/}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default MediaPage
export const mediaPageQuery = graphql`
  query MediaPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "media-page" } }) {
      html
      frontmatter {
        title
        bannerImage {
                   childImageSharp {
                    fluid(maxWidth: 640, quality: 64) {
                      ...GatsbyImageSharpFluid
                    }
                  }
            }
        mediaContent {
            title
            project
            author
            link
            
            image {
                   childImageSharp {
                    fluid(maxWidth: 640, quality: 64) {
                      ...GatsbyImageSharpFluid
                    }
                  }
            }
            date(formatString: "MMMM DD, YYYY")
            mediaHouse
        }
      }
    }
  }
`
// bannerImage {
//     childImageSharp {
//         fluid(maxWidth: 2048, quality: 100) {
//         ...GatsbyImageSharpFluid
//         }
//     }
// }
