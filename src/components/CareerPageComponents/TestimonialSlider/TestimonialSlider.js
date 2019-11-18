import React from "react";
const service = {};
const TestimonialSlider = ({content}) => {
    const params = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        slidesPerView: 1
    };

    return (
        <div className={'container-fluid testimonial-slider'}>
            <div className="second-section row">
                <div className="slider-wrapper col-12">
                    <div className="background hide-for-small-only"/>
                    <div className="slider-card">
                        <img src={!!content.centerBanner.image.childImageSharp ? content.centerBanner.image.childImageSharp.fluid.src : ''} style={{width: '100%'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TestimonialSlider;
