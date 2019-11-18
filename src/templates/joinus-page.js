import React from 'react'
import PropTypes from 'prop-types'
import {kebabCase} from 'lodash'
import Helmet from 'react-helmet'
import {graphql, Link} from 'gatsby'
import Layout from '../components/Layout'
import Content, {HTMLContent} from '../components/Content'
import {MediaRoll} from "../components/MediaRoll";
import JoinUsBannerImage from "../components/JoinUsPageComponents/JoinUsBannerImage/JoinUsBannerImage";
import JoinUsFormSection from "../components/JoinUsPageComponents/JoinUsFormSection/JoinUsFormSection";

const JoinUsPage = ({data}) => {
    const {markdownRemark: joinUsPageContent} = data;
    console.log(joinUsPageContent)
    return (
        <Layout>
            <JoinUsBannerImage/>
            <JoinUsFormSection/>
        </Layout>
    )
}

export default JoinUsPage
export const JoinUsPageQuery = graphql`
  query JoinUsPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "joinus-page" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
