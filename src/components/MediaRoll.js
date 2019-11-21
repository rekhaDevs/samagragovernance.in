import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql, StaticQuery} from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import {PrimaryButton} from "./PrimaryButton/PrimaryButton";

class MediaRoll extends React.Component {
    render() {
        const {data} = this.props;
        const {allMarkdownRemark: mediaPageContent} = data;
        const media = mediaPageContent.edges;
        return (
            <div className={'row'}>
                {
                    media.map((m) => {
                        return <a href={m.node.frontmatter.link} target="_blank" className="col-sm-6 col-xs-12">
                            <div className="blog-wrapper">
                                <div className="image-wrapper" style={{
                                    backgroundImage: `url(${
                                        !!m.node.frontmatter.image.childImageSharp ? m.node.frontmatter.image.childImageSharp.fluid.src : ''
                                    })`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}>

                                </div>
                                <div className="content-wrapper">
                                    <div className="heading" style={{minHeight: '48px'}}>
                                        {m.node.frontmatter.title}
                                    </div>
                                    <div className="posted-on">
                                        {m.node.frontmatter.mediaHouse} on {m.node.frontmatter.date}
                                    </div>

                                    <div className="read-more">
                                        Read More
                                    </div>

                                </div>
                            </div>
                        </a>
                    })
                }
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
                    projectId
                    author
                    link
                    displayOnHomePage
                    mediaHouse
                    image {
                        childImageSharp {
                            fluid(maxWidth: 640, quality: 64) {
                            ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    date(formatString: "MMMM DD, YYYY")
                }
            }
          }
        }
      }
    `}
        render={(data, count) => <MediaRoll data={data} count={count}/>}
    />
)

