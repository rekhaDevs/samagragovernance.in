import {BlogPostTemplate} from "../../templates/blog-post";
import PropTypes from "prop-types";
import React from "react";
import {ProjectPostTemplate} from "../../templates/project-post";
import {MediaPostTemplatePreview} from "../../templates/media-post";
const MediaPostPreview = ({entry, getAsset}) => {
    const data = entry.getIn(['data']).toJS();
    if (data) {
        return (
            <h1>
                No Preview Available
            </h1>
        )
    } else {
        return <div>Loading...</div>
    }
}

MediaPostPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func
    }),
    widgetFor: PropTypes.func
};

export default MediaPostPreview;
