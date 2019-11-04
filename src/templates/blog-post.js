import React from 'react'
import PropTypes from 'prop-types'
import {kebabCase} from 'lodash'
import Helmet from 'react-helmet'
import {graphql, Link} from 'gatsby'
import Layout from '../components/Layout'
import Content, {HTMLContent} from '../components/Content'

export const BlogPostTemplate = ({
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
            {/*<div className="container content">*/}
            {/*    <div className="columns">*/}
            {/*        <div className="column is-10 is-offset-1">*/}
            {/*            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">*/}
            {/*                {title}*/}
            {/*            </h1>*/}
            {/*            <p>{description}</p>*/}
            {/*            <PostContent content={content}/>*/}
            {/*            {tags && tags.length ? (*/}
            {/*                <div style={{marginTop: `4rem`}}>*/}
            {/*                    <h4>Tags</h4>*/}
            {/*                    <ul className="taglist">*/}
            {/*                        {tags.map(tag => (*/}
            {/*                            <li key={tag + `tag`}>*/}
            {/*                                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>*/}
            {/*                            </li>*/}
            {/*                        ))}*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*            ) : null}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={'container blog-detail-section'}>
                <div className="row">
                    {/*<div className="col-md-12 ">*/}
                    {/*    <div className="author-section">*/}
                    {/*        <div className="image">*/}

                    {/*        </div>*/}
                    {/*        <div className="details">*/}
                    {/*            <div className="name">*/}
                    {/*                {blog.author}*/}
                    {/*            </div>*/}
                    {/*            <div className="timestamp">*/}
                    {/*                {blog.timestamp}*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="col-md-12 col-sm-12" style={{paddingTop: '80px'}}>
                        <PostContent content={content}/>
                    </div>
                </div>
            </div>
        </section>
    )
};

BlogPostTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object,
}

const BlogPost = ({data}) => {
    const {markdownRemark: post} = data;

    return (
        <Layout>
            <BlogPostTemplate
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

BlogPost.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
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
