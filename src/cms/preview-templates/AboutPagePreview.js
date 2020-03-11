import React from 'react'
import PropTypes from 'prop-types'
import {FooterPageTemplate} from '../../templates/footer-page'

const AboutPagePreview = ({entry, widgetFor}) => {
    const data = entry.getIn(['data']).toJS();

    return <FooterPageTemplate
        data={data}
    />
};

export default AboutPagePreview
