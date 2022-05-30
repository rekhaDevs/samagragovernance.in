import PropTypes from "prop-types";
import React from "react";
import {C4GTTemplate} from "../../templates/c4gt-page";
const C4GTPagePreview = ({entry, getAsset}) => {
    const data = entry.getIn(['data']).toJS();
    if (data) {
        return (
            <C4GTTemplate content={data}/>
        )
    } else {
        return <div>Loading...</div>
    }
};

C4GTPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func
    }),
    widgetFor: PropTypes.func
};

export default C4GTPagePreview;
