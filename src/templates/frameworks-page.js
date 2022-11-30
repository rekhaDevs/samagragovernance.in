import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import {MediaRoll} from "../components/MediaRoll";
import FrameworkBannerImage from "../components/FrameworksPage/FrameworkBannerImage/FrameworkBannerImage";
import FrameworkSectionSecond from "../components/FrameworksPage/FrameworkSectionSecond/FrameworkSectionSecond";
import FrameworkSectionThird from "../components/FrameworksPage/FrameworkSectionThird/FrameworkSectionThird";

export const CareerPagePreviewTemplate = ({careerPageContent}) => {
    return (
        <React.Fragment>
            <FrameworkBannerImage bannerContent={careerPageContent}/>
            <FrameworkSectionSecond content={careerPageContent}/>
            <FrameworkSectionThird content={careerPageContent}/>
            {/*<CareerSectionThird content={careerPageContent}/>*/}
            {/*<TestimonialSlider content={careerPageContent}/>*/}
            {/*<PaginationSlider content={careerPageContent}/>*/}
            {/*<CareerSectionFifth content={careerPageContent}/>*/}
        </React.Fragment>
    )
};

const MediaPage = ({data}) => {
    const {markdownRemark: careerPageContent} = data;
    return (
        <Layout>
            <CareerPagePreviewTemplate careerPageContent={careerPageContent.frontmatter}/>
        </Layout>
    )
};

export default MediaPage
export const mediaPageQuery = graphql`
  query FrameworksPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "frameworks-page" } }) {
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
       
        mainContent {
            text
        }
        frameworks {
            image {
                childImageSharp {
                    fluid(maxWidth: 1440, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                }
            }
            text
            actions {
                text
                link
                icon {
                    childImageSharp {
                        fluid(maxWidth: 1440, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }

      }
    }
  }
`;
