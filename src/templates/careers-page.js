import React from 'react'
import PropTypes from 'prop-types'
import {kebabCase} from 'lodash'
import Helmet from 'react-helmet'
import {graphql, Link} from 'gatsby'
import Layout from '../components/Layout'
import Content, {HTMLContent} from '../components/Content'
import {MediaRoll} from "../components/MediaRoll";
import CareerBannerImage from "../components/CareerPageComponents/CareerBannerImage/CareerBanner";
import CareerSectionSecond from "../components/CareerPageComponents/CareerSectionSecond/CareerSectionSecond";
import CareerSectionThird from "../components/CareerPageComponents/CareerSectionThird/CareerSectionThird";
import TestimonialSlider from "../components/CareerPageComponents/TestimonialSlider/TestimonialSlider";
import PaginationSlider from "../components/CareerPageComponents/PaginationSlider/PaginationSlider";
import CareerSectionFifth from "../components/CareerPageComponents/CareerSectionFifth/CareerSectionFifth";

const MediaPage = ({data}) => {
    const {markdownRemark: careerPageContent} = data;
    return (
        <Layout>
            <CareerBannerImage bannerContent={careerPageContent.frontmatter}/>
            <CareerSectionSecond content={careerPageContent.frontmatter}/>
            <CareerSectionThird content={careerPageContent.frontmatter}/>
            <TestimonialSlider content={careerPageContent.frontmatter}/>
            <PaginationSlider content={careerPageContent.frontmatter}/>
            <CareerSectionFifth content={careerPageContent.frontmatter}/>
        </Layout>
    )
}

export default MediaPage
export const mediaPageQuery = graphql`
  query CareersPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "careers-page" } }) {
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
        centerBanner {
           image {
            childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
           }
        }
        
        mainContent {
            text
        }
        philosophy {
            sectionOne {
                image {
                    childImageSharp {
                        fluid(maxWidth: 640, quality: 64) {
                          ...GatsbyImageSharpFluid
                        }
                    }
                }
                title
                description
            }
            sectionTwo {
                image {
                    childImageSharp {
                        fluid(maxWidth: 640, quality: 64) {
                          ...GatsbyImageSharpFluid
                        }
                    }
                }
                title
                description
            }
            sectionThree {
                image {
                    childImageSharp {
                        fluid(maxWidth: 640, quality: 64) {
                          ...GatsbyImageSharpFluid
                        }
                    }
                }
                title
                description
            }
            sectionFour {
                image {
                    childImageSharp {
                        fluid(maxWidth: 640, quality: 64) {
                          ...GatsbyImageSharpFluid
                        }
                    }
                }
                title
                description
            }
        }
        faq {
            question
            answer
        }
        roles {
            youtubeLink
            items {
                title
                description
            }
        }
        slides {
            image {
                childImageSharp {
                    fluid(maxWidth: 640, quality: 64) {
                      ...GatsbyImageSharpFluid
                    }
                }
            }
            text
        }

      }
    }
  }
`
