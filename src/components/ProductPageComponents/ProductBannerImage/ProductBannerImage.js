import React from "react";
// import odishaAdaptLogo from '../../../assets/images/project-logos/odisha-adapt-logo.png';

import service from "../../../utils/service";
export const ProductBannerImage = ({project}) => {
    return (

        <div className={'product-page-banner project-banner'}
             style={{
                 height: '600px',
                 overflow: 'hidden',
                 maxHeight: '100vh',
                 backgroundImage: `url(${project.backgroundCover ? ('http://luezoid.com:3399/' + project.backgroundCover) : ''})`
             }}>
            <div className="dummy-header-background"/>
            <div className="translucent-dark-overlay">
                <div className="banner-text">
                    <div className={`project-name`}>
                        <div className="text">
                            {project.title} &nbsp;&nbsp;|
                        </div>
                    </div>
                    <div className="project-tag-line">
                        <div className="text">
                            {project.tagLine || ''}
                        </div>
                        <img
                            src={project.projectLogoWithState ? (service.baseUrl + project.projectLogoWithState) : ''}/>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default ProductBannerImage;
