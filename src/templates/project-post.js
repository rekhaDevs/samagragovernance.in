import React from 'react'
import PropTypes from 'prop-types'
import {kebabCase} from 'lodash'
import Helmet from 'react-helmet'
import {graphql, Link} from 'gatsby'
import Layout from '../components/Layout'
import Content, {HTMLContent} from '../components/Content'
import ProductBannerImage from "../components/ProductPageComponents/ProductBannerImage/ProductBannerImage";
import {ProductPageSecondSection} from "../components/ProductPageComponents/ProductPageSecondSection/ProductPageSecondSection";
import {ProductPageKeyInitiatives} from "../components/ProductPageComponents/ProductPageKeyInitiatives/ProductPageKeyInitiatives";
import {OurPublicationsSection} from "../components/ProductPageComponents/OurPublicationsSection/OurPublicationsSection";

export const ProjectPostTemplate = ({
                                        content,
                                        contentComponent,
                                        description,
                                        tags,
                                        title,
                                        helmet,
                                    }) => {
    const PostContent = contentComponent || Content
    return (
        <section className="section">
            {helmet || ''}
            <div className={'container blog-detail-section'}>
                <div className="row">
                    <div className="col-md-12 col-sm-12" style={{paddingTop: '80px'}}>
                        <PostContent content={content}/>
                    </div>
                </div>
            </div>
        </section>
    )
};
const ProjectPost = ({data}) => {
    const {markdownRemark: item} = data;

    const project = item.frontmatter;
    return (
        project && project.title ? <Layout>
            <ProductBannerImage project={project}/>
            <ProductPageSecondSection project={project}/>
            {/*<ProductPageKeyInitiatives project={project}/>*/}
            {/*<OurPublicationsSection media={media}/>*/}
        </Layout> : <React.Fragment/>
    )
}

export default ProjectPost

export const pageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        domain
        subTitle
        state
        tagLine
        backgroundCover  {
            childImageSharp {
                fluid(maxWidth: 1024, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
        }
        projectLogoWithState  {
            childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
        }
        approach {
            text
        }
       
        overview {
            text
        }
        scale {
            count
            label
        }
        impact {
            count
            label 
        }
        projectMiddleBannerImage {
           childImageSharp {
            fluid(maxWidth: 240, quality: 64) {
              ...GatsbyImageSharpFluid
                }
            }
        }
        keyInitiatives {
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
            }
        }
      }
    }
  }
`
// centerBanner {
//     childImageSharp {
//         fluid(maxWidth: 240, quality: 64) {
//         ...GatsbyImageSharpFluid
//         }
//     }
// }
