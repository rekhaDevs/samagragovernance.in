import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import Content from '../components/Content'
import ProductBannerImage from "../components/ProductPageComponents/ProductBannerImage/ProductBannerImage";
import {ProductPageSecondSection} from "../components/ProductPageComponents/ProductPageSecondSection/ProductPageSecondSection";
import {ProductPageKeyInitiatives} from "../components/ProductPageComponents/ProductPageKeyInitiatives/ProductPageKeyInitiatives";
import OurPublicationsSection from "../components/ProductPageComponents/OurPublicationsSection/OurPublicationsSection";

export const ProjectPostTemplate = ({project}) => {

    return (
        <section>
            <ProductBannerImage project={project}/>
            <ProductPageSecondSection project={project}/>
            {
                project.keyInitiatives ? <ProductPageKeyInitiatives project={project}/> : null
            }

            <OurPublicationsSection readMore={project.readMore} projectId={project.id}/>
        </section>
    )
};
const ProjectPost = ({data}) => {
    const {markdownRemark: item} = data;
    const project = item.frontmatter;
    return (
        project && project.title ? <Layout>
            <ProjectPostTemplate project={project}/>
        </Layout> : <React.Fragment/>
    )
};

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
        id
        readMore {
        
            text
        }
        keyInitiativesTitle
        backgroundCover  {
            childImageSharp {
                fluid(maxWidth: 1024, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
        }
        projectLogoWithState  {
            childImageSharp {
                fluid(maxWidth: 240, quality: 100) {
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
            fluid(maxWidth: 1440, quality: 100) {
              ...GatsbyImageSharpFluid
                }
            }
        }
        keyInitiatives {
            image {
                childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
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
`;
// centerBanner {
//     childImageSharp {
//         fluid(maxWidth: 240, quality: 64) {
//         ...GatsbyImageSharpFluid
//         }
//     }
// }
