import {BlogPostTemplate} from "../../templates/blog-post";
import PropTypes from "prop-types";
import React from "react";
import {ProjectPostTemplate} from "../../templates/project-post";
import {JoinUsPreviewTemplate} from "../../templates/joinus-page";

const JoinUsPreview = ({entry, getAsset}) => {
    const data = entry.getIn(['data']).toJS();
    console.log('data->JoinUsPreview', data);
    if (data) {
        return (
            <JoinUsPreviewTemplate
                joinUsPageContent={data}
            />
        )
    } else {
        return <div>Loading...</div>
    }
};

JoinUsPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func
    }),
    widgetFor: PropTypes.func
};

export default JoinUsPreview;
