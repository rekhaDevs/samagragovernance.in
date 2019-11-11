import React from 'react'
import PropTypes from 'prop-types'
import {kebabCase} from 'lodash'
import Helmet from 'react-helmet'
import {graphql, Link} from 'gatsby'
import Layout from '../components/Layout'
import Content, {HTMLContent} from '../components/Content'

export const ProjectPostTemplate = ({
                                     content,
                                     contentComponent,
                                     description,
                                     tags,
                                     title,
                                     helmet,
                                 }) => {
    const PostContent = contentComponent || Content
    console.log(description);
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
    const {markdownRemark: post} = data;

    return (
        <Layout>
            <ProjectPostTemplate
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                helmet={
                    <Helmet titleTemplate="%s | Blog">
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta
                            name="description"
                            content={`${post.frontmatter.description}`}
                        />
                    </Helmet>
                }
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
            />
        </Layout>
    )
}

export default ProjectPost

export const pageQuery = graphql`
  query ProjectPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
