import React from "react";

const FrameworkBannerImage = ({bannerContent}) => {
    return (
        <div className={'home-top-slider-wrapper media-page-banner'}
             style={{height: '600px', backgroundImage: `url(${
                     !!bannerContent.bannerImage.childImageSharp ? bannerContent.bannerImage.childImageSharp.fluid.src : bannerContent.bannerImage
                 })`}}>
            <div className="translucent-dark-overlay" style={{height: 'auto'}}>
            </div>
            <div className=" container content-section">
                <div className="title">
                    {bannerContent.title}
                </div>
            </div>
        </div>
    )
};

export default FrameworkBannerImage;
