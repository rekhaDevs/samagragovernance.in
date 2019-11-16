import React, {useState} from "react";
import service from "../../../utils/service";

export const OurPublicationsSection = ({media}) => {

    const [hoveredIndex, setHoveredIndex] = useState(
        -1
    );
    const publicationsObject = media;
    return (
        <div className={'home-news-section-wrapper our-publication-section-wrapper container'}
             style={{paddingTop: '50px'}}>
            <div className={'title'}>
                Read More
            </div>
            <div className={'cards-section row'}>
                {

                    publicationsObject.map((publication, index) => {
                        if (!publication.blog)
                            return <a href={publication.link} target="_blank" className={'col-md-4 col-sm-6 col-xs-12'}>
                                <div
                                    className={`card-wrapper  ${hoveredIndex === index ? 'hovered' : ''}`}
                                    onMouseLeave={() => setHoveredIndex(-1)}
                                    onMouseEnter={() => setHoveredIndex(index)}>
                                    <div className={'image-section'}
                                         style={
                                             {
                                                 backgroundImage: `url(${service.baseUrl + publication.image})`,
                                                 backgroundSize: 'cover',
                                                 backgroundPosition: 'center'
                                             }}/>
                                    <div className={'content-section'}>
                                        <div className={'heading'}>
                                            {
                                                publication.title
                                            }
                                        </div>
                                        <div className={'timestamp'}>
                                            {
                                                publication.mediaHouse
                                            }&nbsp;|&nbsp;
                                            {
                                                publication.timestamp
                                            }&nbsp;|&nbsp;Media
                                        </div>
                                    </div>
                                </div>
                            </a>;
                        return <a href={'/blog/' + getSlug(publication.title)}
                                  className={'col-md-4 col-sm-6 col-xs-12'}>
                            <div
                                className={`card-wrapper  ${hoveredIndex === index ? 'hovered' : ''}`}
                                onMouseLeave={() => setHoveredIndex(-1)}
                                onMouseEnter={() => setHoveredIndex(index)}>
                                <div className={'image-section'}
                                     style={
                                         {
                                             backgroundImage: `url(${service.baseUrl + publication.image})`,
                                             backgroundSize: 'cover',
                                             backgroundPosition: 'center'
                                         }}/>
                                <div className={'content-section'}>
                                    <div className={'heading'}>
                                        {
                                            publication.title
                                        }
                                    </div>
                                    <div className={'timestamp'}>
                                        {
                                            publication.author
                                        } &nbsp;|&nbsp;{
                                            publication.timestamp
                                        }&nbsp;|&nbsp;Blog
                                    </div>
                                </div>
                            </div>
                        </a>;
                    })
                }
            </div>
        </div>
    )
};

function getSlug(str) {
    let result = '';
    str = str.replace(/ /g, '-').toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if ('abcdefghijklmnopqrstuvwxyz0123456789-'.indexOf(str[i]) > -1) {
            result += str[i];
        }
    }
    return result;
}
