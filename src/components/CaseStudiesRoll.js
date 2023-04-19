import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import { PrimaryButton } from '../components/PrimaryButton/PrimaryButton';
import PreviewCompatibleImage from './PreviewCompatibleImage';

class CaseStudiesRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <div className="blogs-section">
        <div className="row">
          {posts.map(({ node: post }) => {
            return (
              <div
                className="col-lg-3 col-md-4 col-sm-6 col-xs-1 mb-5"
                key={post.id}>
                <div className="blog-wrapper" style={{position: 'relative'}}>
                  {post.frontmatter.featuredimage ? (
                    <div
                      className="image-wrapper"
                      style={{
                        backgroundImage: `url(${post.frontmatter.featuredimage
                          .childImageSharp.fluid.src ||
                          post.frontmatter.featuredimage})`,
                        filter: 'grayscale(100%)',
                        transition: 'filter 0.5s ease-out',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.filter = 'grayscale(0%)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.filter = 'grayscale(100%)';
                      }}>
                    </div>
                  ) : null}
                      <div
                        style={{
                          pointerEvents: 'none',
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column'
                        }}>
                        <p style={{ margin: 'auto auto 5% auto', color: 'white', fontSize: '16px' }}>{post.frontmatter.projectId}</p>
                        <p style={{ margin: '5% auto 5% auto', color: 'white', fontSize: '12px' }}>{post.frontmatter.title}</p>
                        <PrimaryButton
                          onMouseOver={(e) => {e.stopPropagation()}}
                          onMouseOut={(e) => {e.stopPropagation()}}
                          style={{ margin: 'auto auto 5% auto', pointerEvents: 'auto'}}
                          classes={'py-1 text-uppercase'}
                          text= {post.frontmatter.buttonText}
                          click={() => {
                            window.open(post.frontmatter.link, '_blank');
                          }}
                        />
                      </div>
                  {/* <div className="content-wrapper">
                    <div className="heading">{post.frontmatter.title}</div>
                    <div className="posted-on">
                      by {post.frontmatter.author} on {post.frontmatter.date}
                    </div>

                    <div className="read-more">Read More</div>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

CaseStudiesRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query CaseStudiesRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "case-study" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                author
                date(formatString: "MMMM DD, YYYY")
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 640, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                projectId
                link
                buttonText
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <CaseStudiesRoll data={data} count={count} />}
  />
);
