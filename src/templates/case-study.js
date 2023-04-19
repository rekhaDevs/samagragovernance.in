import '../styles/BlogDetails.scss';
import { Link, graphql } from 'gatsby';
import React from 'react';
import CaseStudyPage from '../components/CaseStudyPage';
export const CaseStudyTemplate = ({ content }) => {
  return (
    <>
      <CaseStudyPage content={content[0].node.frontmatter}/>
    </>
  );
};

const CaseStudy = ({ data }) => {
  const { edges: post } = data.allMarkdownRemark;
  return (
    <CaseStudyTemplate
      content={post.filter((obj) => obj.node.frontmatter.description !== null)}
    />
  );
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
            description
            bannerImage {
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
