import React from "react";

export const PaertnersBannerImage = ({bannerImage}) => {
    return (

        <div className={'home-top-slider-wrapper partner-banner'}
             style={{height: '600px', maxHeight: '100vh', backgroundImage:  `url(${
                     !!bannerImage.childImageSharp ? bannerImage.childImageSharp.fluid.src : bannerImage
                 })`}}>

            <div className="translucent-dark-overlay" style={{height: 'auto'}}>
            </div>
            <div className="content-section">
                <div className="logo">

                </div>
                <div className="title">
                    Our Partners
                </div>
            </div>
        </div>

    )
};

export default PaertnersBannerImage;
