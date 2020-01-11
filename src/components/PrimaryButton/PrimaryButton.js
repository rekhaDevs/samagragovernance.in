import React from "react";

export const PrimaryButton = ({classes, text, children, click, style, type}) => {
    return (
        <button style={{...style}}
                onClick={click}
                type={type ? type : 'button'}
                className={`${classes ? classes : ''} btn-theme-primary`}>{children} {text ? text : ''}</button>
    )
};
