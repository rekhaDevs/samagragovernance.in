import React, {useState} from "react";

import adaptImage from '../../../assets/images/project-logos/Samagra Governance ADAPT Odisha Logo.png';
import {PrimaryButton} from "../../PrimaryButton/PrimaryButton";


export const HomeThirdSection = ({items}) => {

    const [activeItem, setActiveItem] = useState(
        0
    );
    const [stateItems, setStateItems] = useState(
        items
    );
    let swiperInstance;
    let swiperTitleInstance;
    const params = {
        on: {
            'init': () => {
            },
            'slideChange': (d) => {
                if (swiperInstance) {
                    if (swiperTitleInstance) {
                        setTimeout(() => {
                            swiperTitleInstance.slideTo(swiperInstance.activeIndex);
                        }, 100)
                    }
                }

            }
        }
    };

    const [activeTitleIndex, setActiveTitleIndex] = useState(
        0
    );

    const [paramsTitle, setParamsTitle] = useState(
        {
            on: {},
            initialSlide: 0
        }
    );

    return (
        stateItems && stateItems[activeItem] ? <div className={'home-third-section-wrapper'}
                                                    style={{backgroundImage: `url(${stateItems[activeItem].image})`}}>
            <div className="translucent-dark-overlay">
                <div className={'title'}>
                    We work with state governments across India
                </div>
                <div className={'content-section container hide-for-small-only'}>
                    <div className={'text-section'}>
                        <div className={'list-wrapper'}>
                            {
                                items.map((item, index) => {
                                    return <div className={`list-item ${index === activeItem ? 'active' : ''}`}
                                                key={index}
                                                onClick={() => setActiveItem(index)}>
                                        {item.name}
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className={'image-section'}>
                        <div className="description-wrapper">
                            <img className={'image-logo'}
                                 src={stateItems[activeItem].projects[stateItems[activeItem].activeProjectIndex].logo}/>
                            <div className="description">
                                {
                                    stateItems[activeItem].projects[stateItems[activeItem].activeProjectIndex].shortDescription.map((shortDescription) => {
                                        return <p>{shortDescription}</p>
                                    })
                                }
                            </div>
                            <a href={stateItems[activeItem].projects[stateItems[activeItem].activeProjectIndex].projectUrl}>
                                <div className="read-more-text">
                                    Read More
                                </div>
                            </a>
                        </div>
                        <div className="image-wrapper">

                        </div>
                        {
                            stateItems[activeItem].projects && stateItems[activeItem].projects.length && stateItems[activeItem].projects.length > 1 ?
                                <div className="bubble-wrapper">
                                    {
                                        stateItems[activeItem].projects.map((project, index) => {
                                            return <div
                                                className={`navigation-bubble ${index === stateItems[activeItem].activeProjectIndex ? 'active' : 'in-active'}`}
                                                onClick={() => {
                                                    let i = items;
                                                    items[activeItem].activeProjectIndex = index;
                                                    setStateItems(JSON.parse(JSON.stringify(i)));
                                                }}/>
                                        })
                                    }
                                </div>
                                : null
                        }
                    </div>

                </div>
                {/*<div className={'content-section-small show-for-small-only'}>*/}
                {/*    <div className={'swiper-section'}>*/}
                {/*        <Swiper {...paramsTitle} ContainerEl={'div'} getSwiper={(node) => {*/}
                {/*            swiperTitleInstance = node;*/}
                {/*        }}>*/}
                {/*            {*/}
                {/*                items.map((item, index) => {*/}
                {/*                    return <div>*/}
                {/*                        <SlideItemTitle index={index} key={index} item={item}/>*/}
                {/*                    </div>*/}
                {/*                })*/}
                {/*            }*/}
                {/*        </Swiper>*/}
                {/*        <Swiper {...params} ContainerEl={'div'} getSwiper={(node) => {*/}
                {/*            swiperInstance = node;*/}
                {/*        }}>*/}
                {/*            {*/}
                {/*                [1, 1, 1, 1, 1, 1].map((item, index) => {*/}
                {/*                    return <div>*/}
                {/*                        <SlideItem key={index}/>*/}
                {/*                    </div>*/}
                {/*                })*/}
                {/*            }*/}
                {/*        </Swiper>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div> : <div/>
    )
};

const SlideItem = ({classes}) => {
    return (
        <div className="card-outer-wrapper">
            <div className="card-wrapper">
                <div className="title">
                    ODISHA
                </div>
                <div className="image">
                    <img src={adaptImage}/>
                </div>
                <div className="description">
                    An effort with the agriculture department to improve farm productivity and farmer income
                    through a data stack for agriculture and a decision support system
                </div>
                <PrimaryButton text={'EXPLORE MORE'}/>
                <div className={'bottom-slide-pagination-wrapper'}>
                    <div className={'bottom-slide-pagination'}>
                        <div className={'page-indicator active'}/>
                        <div className={'page-indicator'}/>
                        <div className={'page-indicator'}/>
                        <div className={'page-indicator'}/>
                        <div className={'page-indicator'}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

const SlideItemTitle = ({classes, item, setActiveItem, activeItem, index}) => {
    return (
        <div className={'text-section-wrapper'}>
            {
                <div className={`list-item ${index === activeItem ? 'active' : ''}`}
                     key={index}>
                    {item.name}
                </div>
            }
        </div>
    )
};
