import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import {MediaRoll} from "../components/MediaRoll";
import CareerBannerImage from "../components/CareerPageComponents/CareerBannerImage/CareerBanner";
import TGCPageComponent from '../components/TGCPageComponent/TGCPageComponent';
import CareerSectionSecond from "../components/CareerPageComponents/CareerSectionSecond/CareerSectionSecond";
import CareerSectionThird from "../components/CareerPageComponents/CareerSectionThird/CareerSectionThird";
import TestimonialSlider from "../components/CareerPageComponents/TestimonialSlider/TestimonialSlider";
import PaginationSlider from "../components/CareerPageComponents/PaginationSlider/PaginationSlider";
import CareerSectionFifth from "../components/CareerPageComponents/CareerSectionFifth/CareerSectionFifth";

export const TGCTemplate = ({content}) => {
    return (
        <React.Fragment>
            <CareerBannerImage bannerContent={content}/>
            <TGCPageComponent fromTGC={true} content={content}/>
        </React.Fragment>
    )
};

const MediaPage = ({data}) => {
    const {markdownRemark: careerPageContent} = data;
    return (
        <Layout>
            <TGCTemplate content={careerPageContent.frontmatter}/>
        </Layout>
    )

};


export default MediaPage
export const mediaPageQuery = graphql`
  query TGCPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "tgc-page" } }) {
      html
      frontmatter {
        title
        bannerImage {
           childImageSharp {
            fluid(maxWidth: 1440, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        centerBanner {
           image {
            childImageSharp {
                fluid(maxWidth: 1440, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
           }
        }
        
        mainContent {
            text
        }
      }
    }
  }
`;
