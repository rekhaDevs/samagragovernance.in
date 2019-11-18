import React from "react";

const CareerBannerImage = ({bannerImage}) => {
    return (
        <div className={'home-top-slider-wrapper media-page-banner'}
             style={{height: '600px', backgroundImage: `url(${bannerImage})`}}>
            <div className="translucent-dark-overlay" style={{height: 'auto'}}>
            </div>
            <div className=" container content-section">
                <div className="title">
                    Careers @ Samagra
                </div>
            </div>
        </div>
    )
};

export default CareerBannerImage;
