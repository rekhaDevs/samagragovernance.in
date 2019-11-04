import React, {useState} from "react";

export const OurPublicationsSection = ({media}) => {

    const [hoveredIndex, setHoveredIndex] = useState(
        -1
    );
    const publicationsObject = media;
    return (
        <div className={'home-news-section-wrapper our-publication-section-wrapper'} style={{paddingTop: '50px'}}>
            <div className={'title'}>
                Read More
            </div>
            <div className={'cards-section'}>
                {

                    publicationsObject.map((publication, index) => {
                        return <a href={publication.link} target="_blank">
                            <div className={`card-wrapper ${hoveredIndex === index ? 'hovered' : ''}`}
                                 onMouseLeave={() => setHoveredIndex(-1)}
                                 onMouseEnter={() => setHoveredIndex(index)}>
                                <div className={'image-section'}
                                     style={{backgroundImage: `url(${'http://luezoid.com:3399/' + publication.image})`}}/>
                                <div className={'content-section'}>
                                    <div className={'heading'}>
                                        {
                                            publication.title
                                        }
                                    </div>
                                    <div className={'timestamp'}>
                                        {
                                            publication.timestamp
                                        }
                                    </div>
                                </div>
                            </div>
                        </a>
                    })
                }
            </div>
        </div>
    )
};
