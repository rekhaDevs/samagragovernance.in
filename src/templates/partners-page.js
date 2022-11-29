import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'

import PaertnersBannerImage from "../components/PartnersPageComponents/PaertnersBannerImage/PaertnersBannerImage";
import PartnersSectionSecond from "../components/PartnersPageComponents/PartnersSectionSecond/PartnersSectionSecond";

export const PartnerPagePreviewTemplate = ({post}) => {
    return (
        <React.Fragment>
            <PaertnersBannerImage title={post.title} bannerImage={post.bannerImage}/>
            <PartnersSectionSecond content={post}/>
        </React.Fragment>
    )
};

const PartnerPage = ({data}) => {
    const {markdownRemark: post} = data;
    if (!post.frontmatter.bannerImage) {
        return '';
    }
    return (
        <Layout>
            <PartnerPagePreviewTemplate post={post.frontmatter}/>
        </Layout>
    )
};

PartnerPage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default PartnerPage

export const aboutPageQuery = graphql`
  query PartnerPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
       bannerImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        subTitle
        partnerTitle
        titleLines {
            text
        }
        videos {
            videoUrl
            partnerName
            designation
        }
        partners {
            image {
                childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
            }
            description
        }
      }
    }
  }
`;
