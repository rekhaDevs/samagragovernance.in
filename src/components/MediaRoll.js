import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql, StaticQuery} from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class MediaRoll extends React.Component {
    render() {
        const {data} = this.props
        const {edges: posts} = data.allMarkdownRemark
        return (

            <div className="blogs-section">
                {/*<div className="row">*/}
                {/*    {*/}
                {/*        posts.map(({node: post}) => {*/}
                {/*            return <a className="col-lg-3 col-md-4 col-sm-6 col-xs-1" key={post.id}*/}
                {/*                      href={post.fields.slug}>*/}
                {/*                <div className="blog-wrapper">*/}
                {/*                    {*/}
                {/*                        post.frontmatter.featuredimage ?*/}

                {/*                            <div className="image-wrapper"*/}
                {/*                                 style={{backgroundImage: `url(${post.frontmatter.featuredimage.childImageSharp.fluid.src})`}}>*/}

                {/*                            </div>*/}
                {/*                            : null*/}
                {/*                    }*/}
                {/*                    <div className="content-wrapper">*/}
                {/*                        <div className="heading">*/}
                {/*                            {post.frontmatter.title}*/}
                {/*                        </div>*/}
                {/*                        <div className="posted-on">*/}
                {/*                            by {post.author} on {post.timestamp}*/}
                {/*                        </div>*/}

                {/*                        <div className="read-more">*/}
                {/*                            Read More*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </a>*/}
                {/*        })*/}
                {/*    }*/}
                {/*</div>*/}
            </div>

        )
    }
}

export default () => (
    <StaticQuery
        query={graphql`
      query MediaRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "media-post" } } }
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
                date(formatString: "MMMM DD, YYYY")
             
                image {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
        render={(data, count) => <MediaRoll data={data} count={count}/>}
    />
)
