import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import Content, {HTMLContent} from '../components/Content'
import {FooterComponent} from "../components/Footer";

export const FooterPageTemplate = ({data}) => {
    return (
        <FooterPage data={data}/>
    )
}

const FooterPage = ({data}) => {

    console.log(data);
    return (
        <FooterComponent/>
    )
};

export default FooterPage

export const aboutPageQuery = graphql`
  query FooterPage {
    markdownRemark(frontmatter: { templateKey: { eq: "footer-page" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
