import '../styles/BlogDetails.scss';
import { graphql } from 'gatsby';
import React from 'react';
export const CaseStudyTemplate = () => {
  return <div />;
};

const CaseStudy = () => {
  return <CaseStudyTemplate />;
};

export default CaseStudy;

export const pageQuery = graphql`
  query CaseStudyQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "case-study" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            templateKey
            title
            projectId
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 1280, quality: 62) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            link
            buttonText
          }
        }
      }
    }
  }
`;
