import React from "react";

const PartnersSectionSecond = ({content}) => {

    if (!content) {
        return '';
    }
    return (
        <div className={'partners-section-second'}>
            <div className="row m-0">
                <div className="col-11 mx-auto">
                    <div className={'mt-4 py-5 text-center f-23 color-text-primary main-text container'}>
                        {
                            content.titleLines.map((title) => {
                                return <div>{title}</div>
                            })
                        }
                    </div>
                    <div className="container">
                        <div className="partners-wrapper row">
                            {
                                content.videos.map((video) => {
                                    return <div className="col-md-4 col-sm-6 col-xs-12 ">
                                        <div className="card-wrapper ">
                                            <div className="image-section">
                                                <iframe width="100%" height="100%"
                                                        src={video.videoUrl}
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen></iframe>
                                            </div>
                                            <div className="content-section">
                                                <div className="heading">
                                                    {video.partnerName}
                                                </div>
                                                <div className="designation">
                                                    {video.designation}
                                                </div>
                                                <div className="foundation">
                                                    {video.foundation}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                            {/*<div className="col-md-4 col-sm-6 col-xs-12 ">*/}
                            {/*    <div className="card-wrapper ">*/}
                            {/*        <div className="image-section">*/}
                            {/*            <iframe width="100%" height="100%"*/}
                            {/*                    src="https://www.youtube.com/embed/oJm-kLL-W78"*/}
                            {/*                    frameBorder="0"*/}
                            {/*                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"*/}
                            {/*                    allowFullScreen></iframe>*/}
                            {/*        </div>*/}
                            {/*        <div className="content-section">*/}
                            {/*            <div className="heading">*/}
                            {/*                Dr Pramath Sinha*/}
                            {/*            </div>*/}
                            {/*            <div className="designation">*/}
                            {/*                Founder & Trustee*/}
                            {/*            </div>*/}
                            {/*            <div className="foundation">*/}
                            {/*                Ashoka University*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-4 col-sm-6 col-xs-12 ">*/}
                            {/*    <div className="card-wrapper ">*/}
                            {/*        <div className="image-section">*/}
                            {/*            <iframe width="100%" height="100%"*/}
                            {/*                    src="https://www.youtube.com/embed/IwDQv3Yt5wI"*/}
                            {/*                    frameBorder="0"*/}
                            {/*                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"*/}
                            {/*                    allowFullScreen></iframe>*/}
                            {/*        </div>*/}
                            {/*        <div className="content-section">*/}
                            {/*            <div className="heading">*/}
                            {/*                Dr Saurabh Garg*/}
                            {/*            </div>*/}
                            {/*            <div className="designation">*/}
                            {/*                Principal Secretary, Agriculture*/}
                            {/*            </div>*/}
                            {/*            <div className="foundation">*/}
                            {/*                Govt of Odisha*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className={'fw-600 text-center mt-5 pt-4 mb-5 partners-title'}>
                        {content.partnerTitle}
                    </div>
                    <div className="container partner-companies">
                        <div className="row ">
                            {
                                content.partners.map((partner) => {
                                    return <div className="partners-image-wrapper col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                        <div className={'description'}>
                                            {partner.description}
                                        </div>
                                        <img src={service.baseUrl + partner.image}/>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PartnersSectionSecond;
