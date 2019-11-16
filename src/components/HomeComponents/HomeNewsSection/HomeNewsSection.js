import React, {useState} from "react";
import news1Image from "../../../assets/images/home-page/news-1.jpg";
import news2Image from "../../../assets/images/home-page/news-2.jpg";
import news3Image from "../../../assets/images/home-page/news3.jpg";

export const HomeNewsSection = ({}) => {
    const newsObjects = [
        {
            image: news1Image,
            text: 'Let’s step up efforts to get professionals' +
                'in governance',
            aligned: 'right',
            link: 'https://www.livemint.com/opinion/online-views/opinion-let-s-step-up-efforts-to-get-professionals-in-governance-1562089477115.html',
            timestamp: '02-Jul-2019'
        }, {
            image: news2Image,
            text: 'How this social enterprise is helping the Odisha govt boost agricultural productivity in the State',
            link: 'https://yourstory.com/socialstory/2019/06/agritech-startup-samagra-odisha-government-productivity',
            timestamp: '28-Jun-2019'
        }, {
            image: news3Image,
            text: 'Employment to Agriculture: Meet the Startup Helping States Revolutionise Governance',
            link: 'https://www.thebetterindia.com/173957/startup-governance-farmers-job-haryana-odisha/',
            timestamp: '4-Mar-2019'
        }
    ];
    const [hoveredIndex, setHoveredIndex] = useState(
        -1
    );
    return (
        <div className={'home-news-section-wrapper'}>
            <div className={'title'}>
                Samagra in News
            </div>
            <div className={'cards-section'}>
                {
                    newsObjects.map((news, index) => {
                        return <a href={news.link} target="_blank">
                            <div
                                className={`card-wrapper ${hoveredIndex === index ? 'hovered' : ''} `}
                                onMouseLeave={() => setHoveredIndex(-1)}
                                onMouseEnter={() => setHoveredIndex(index)}>
                                <div className={`image-section ${news.aligned === 'right' ? 'background-right' : ''}`}
                                     style={{backgroundImage: `url(${news.image})`}}/>
                                <div className={'content-section'}>
                                    <div className={'heading'} style={{minHeight: '40px'}}>
                                        {news.text}
                                    </div>
                                    <div className={'timestamp'}>
                                        {news.timestamp}
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
