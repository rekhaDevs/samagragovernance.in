import {BlogPostTemplate} from "../../templates/blog-post";
import PropTypes from "prop-types";
import React from "react";
import {ProjectPostTemplate} from "../../templates/project-post";
import {MediaPostTemplatePreview} from "../../templates/media-post";

const MediaPostPreview = ({entry, getAsset}) => {
    let data = entry.getIn(['data']).toJS();
    data.date = data.date.toString();
    if (data) {
        return (
            <div className={'media-section'}>
                <div className="row">
                    <MediaPostTemplatePreview data={data}/>
                </div>
            </div>
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
