import {BlogPostTemplate} from "../../templates/blog-post";
import PropTypes from "prop-types";
import React from "react";
import {ProjectPostTemplate} from "../../templates/project-post";
import {CareerPagePreviewTemplate} from "../../templates/careers-page";
const CareerPagePreview = ({entry, getAsset}) => {
    const data = entry.getIn(['data']).toJS()
    if (data) {
        return (
            <CareerPagePreviewTemplate careerPageContent={data}/>
        )
    } else {
        return <div>Loading...</div>
    }
}

CareerPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func
    }),
    widgetFor: PropTypes.func
};

export default CareerPagePreview;
