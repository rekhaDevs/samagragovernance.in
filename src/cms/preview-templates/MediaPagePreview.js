import React from 'react'
import PropTypes from 'prop-types'
import {MediaPagePreviewTemplate} from "../../templates/media-page";
import {ProjectPostTemplate} from "../../templates/project-post";

const MediaPagePreview = ({entry, widgetFor}) => {
    const data = entry.getIn(['data']).toJS();
    if (data) {
        return (
            <MediaPagePreviewTemplate mediaPageContent={data}/>
        )
    } else {
        return <div>Loading...</div>
    }
};

MediaPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
};

export default MediaPagePreview
