import React from 'react'
import PropTypes from 'prop-types'
import { FooterPageTemplate } from '../../templates/footer-page'

const AboutPagePreview = ({ entry, widgetFor }) => (
  <FooterPageTemplate
    data={entry.getIn(['data'])}
  />
);

export default AboutPagePreview
