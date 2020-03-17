import React from 'react'
import PropTypes from 'prop-types'
import {kebabCase} from 'lodash'
import Helmet from 'react-helmet'
import {graphql, Link} from 'gatsby'
import Layout from '../components/Layout'
import Content, {HTMLContent} from '../components/Content'
import MediaRoll from "../components/MediaRoll";
import backgroundImage from "../img/blog-header-bg.jpg";


export const MediaPagePreviewTemplate = ({mediaPageContent}) => {
    return (
        <React.Fragment>
            <div className={'home-top-slider-wrapper media-page-banner'}
                 style={{
                     height: '600px',
                     backgroundImage: `url(${backgroundImage})`
                 }}>
                <div className="translucent-dark-overlay" style={{height: 'auto'}}>
                </div>
                <div className=" container content-section">
                    <div className="title">
                        {mediaPageContent.title}
                    </div>
                </div>
            </div>
            <div className="media-section container">
                <MediaRoll/>
            </div>
        </React.Fragment>
    )
};

const MediaPage = ({data}) => {
    const {markdownRemark: mediaPageContent} = data;
    return (
        <Layout>
            <MediaPagePreviewTemplate mediaPageContent={mediaPageContent.frontmatter}/>
        </Layout>
    )
};

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
      }
    }
  }
`;
