import React from 'react'
import PropTypes from 'prop-types'
import {kebabCase} from 'lodash'
import Helmet from 'react-helmet'
import {graphql, Link} from 'gatsby'
import Layout from '../components/Layout'
import Content, {HTMLContent} from '../components/Content'
import JoinUsBannerImage from "../components/JoinUsPageComponents/JoinUsBannerImage/JoinUsBannerImage";
import JoinUsFormSection from "../components/JoinUsPageComponents/JoinUsFormSection/JoinUsFormSection";


export const JoinUsPreviewTemplate = ({joinUsPageContent}) => {
    return (
        <React.Fragment>
            <JoinUsBannerImage/>
            <JoinUsFormSection joinUsPageContent={joinUsPageContent} verticleImage={joinUsPageContent.verticalImage}
                               horizontalImage={joinUsPageContent.horizontalImage}/>
        </React.Fragment>
    )
};

const JoinUsPage = ({data}) => {
    const {markdownRemark: joinUsPageContent} = data;
    return (
        <Layout>
            <JoinUsPreviewTemplate joinUsPageContent={joinUsPageContent.frontmatter}/>
        </Layout>
    )
};

export default JoinUsPage
export const JoinUsPageQuery = graphql`
  query JoinUsPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "joinus-page" } }) {
      html
      frontmatter {
        title
        verticalImage {
             childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
        }
        horizontalImage {
             childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
        }
        formsElements {
            label
            required
            placeholder
            type
            validation
            otherOptionAvailable {
                activateOn
                label
                placeholder
            }
            options {
                text
            }
            actionName
            questions {
                text
            }
        }
      }
    }
  }
`;
