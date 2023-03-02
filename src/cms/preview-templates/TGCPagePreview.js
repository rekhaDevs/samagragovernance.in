import PropTypes from "prop-types";
import React from "react";
import {TGCTemplate} from "../../templates/tgc-page";
const TGCPagePreview = ({entry, getAsset}) => {
    const data = entry.getIn(['data']).toJS();
    if (data) {
        return (
            <TGCTemplate content={data}/>
        )
    } else {
        return <div>Loading...</div>
    }
};

TGCPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func
    }),
    widgetFor: PropTypes.func
};

export default TGCPagePreview;
