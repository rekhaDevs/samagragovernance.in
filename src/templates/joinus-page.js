import React from 'react'
import PropTypes from 'prop-types'
import {kebabCase} from 'lodash'
import Helmet from 'react-helmet'
import {graphql, Link} from 'gatsby'
import Layout from '../components/Layout'
import Content, {HTMLContent} from '../components/Content'
import {MediaRoll} from "../components/MediaRoll";

const JoinUsPage = ({data}) => {
    const {markdownRemark: joinUsPageContent} = data;
    console.log(joinUsPageContent);
    return (
        <Layout>
            {/*<div className={'home-top-slider-wrapper media-page-banner'}*/}
            {/*     style={{*/}
            {/*         height: '600px',*/}
            {/*         backgroundImage: `url(https://api.samagragovernance.in/blog/blog-header-bg.jpg)`*/}
            {/*     }}>*/}
            {/*    <div className="translucent-dark-overlay" style={{height: 'auto'}}>*/}
            {/*    </div>*/}
            {/*    <div className=" container content-section">*/}
            {/*        <div className="title">*/}
            {/*            {joinUsPageContent.frontmatter.title}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </Layout>
    )
}

export default JoinUsPage
export const JoinUsPageQuery = graphql`
  query JoinUsPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "media-page" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
