import PropTypes from "prop-types";
import React from "react";
import {PartnerPagePreviewTemplate} from "../../templates/partners-page";

const PartnerPagePreview = ({entry, getAsset}) => {
    const data = entry.getIn(['data']).toJS();
    console.log('PartnerPagePreview->data', data);
    if (data) {
        return (
            <PartnerPagePreviewTemplate
                post={data}
            />
        )
    } else {
        return <div>Loading...</div>
    }
};

PartnerPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func
    }),
    widgetFor: PropTypes.func
};

export default PartnerPagePreview;
