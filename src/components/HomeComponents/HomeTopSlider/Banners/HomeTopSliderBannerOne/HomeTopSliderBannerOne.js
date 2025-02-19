import React from "react";
import {Element, scroller} from "react-scroll/modules";
import {PrimaryButton} from "../../../../PrimaryButton/PrimaryButton";


export class HomeTopSliderBannerOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSlider: false,
            selectedTextIndex: 0,
            texts: [
                'Learn how we are working with the Government of Haryana to transform school education in the state',
                '86% students in Grades 3, 5, 7 are now grade-level competent in Hindi & Math',
                'Merit-based recruitment and transparent transfer process for 1 lakh+ teachers'
            ]
        };
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps && nextProps['bannerActive'] && !this.state.slideTitleVisible) {
            setTimeout(() => {
                this.setState({slideTitleVisible: true});
                setTimeout(() => {
                    this.setState({showSlider: true, scrollTo: 1});
                    this.startScrollAnimation();
                }, 3000);
            }, 1000);
        } else if (nextProps && !nextProps['bannerActive']) {
            this.setState({slideTitleVisible: false, selectedTextIndex: 0, scrollTo: 0, showSlider: false});
            scroller.scrollTo('slide-1', {
                duration: 1000,
                delay: 0,
                smooth: 'easeInOutQuart',
                containerId: 'slider-container',
            });
        }
    }

    scrollTo() {
        let scrollTo = 0;
        const {texts} = this.state;
        if (this.state.scrollTo === 3) {
            // scrollTo = 1;
        } else {
            scrollTo = this.state.scrollTo + 1;
        }
        if (texts[scrollTo - 1]) {
            this.setState({selectedTextIndex: scrollTo - 1})
        } else {
            this.setState({selectedTextIndex: 0})
        }
        this.setState({scrollTo}, () => {
            scroller.scrollTo('slide-' + scrollTo, {
                duration: 1000,
                delay: 0,
                smooth: 'easeInOutQuart',
                containerId: 'slider-container',
            });
        });
    }

    getProjectUrl = (projectName) => {
        if (!projectName) {
            return;
        }
        return '/project/' + projectName.replace(/ /g, '-').toLowerCase();
    };
    startScrollAnimation = () => {
        let {scrollTo, selectedTextIndex, texts} = this.state;
        if (scrollTo === 3)
            return;
        setTimeout(() => {
            this.scrollTo();
            this.startScrollAnimation();
        }, 4000);
    };

    render() {
        const {bannerActive, banner} = this.props;
        const {showSlider, texts, selectedTextIndex, slideTitleVisible, scrollTo} = this.state;
        return (
            <div id={'home-top-slider-banner-one'} className={`${bannerActive ? 'active' : ''} `}>
                <div className="translucent-dark-overlay-banner"
                     style={{
                         backgroundImage: `url(${
                             !!banner.slides[0].image.childImageSharp ? banner.slides[0].image.childImageSharp.fluid.src : banner.slides[0].image
                         })`
                     }}>
                    <div className="translucent-dark-overlay"/>
                    <div className={'container'}>
                        <div className={'slider-content '}>
                            <div className={'left-text-section'}>
                                <div className={`title ${slideTitleVisible ? 'visible' : ''}`}>
                                    {banner && banner.titleLines ?
                                        banner.titleLines.map((line) => {
                                            return <div>
                                                {line.text}
                                            </div>
                                        }) : <span/>
                                    }
                                </div>
                                <div className={`slider-wrapper  ${showSlider ? 'visible' : ''}`}>
                                    <div className="slider soft-hide-form-small-only">
                                        <div className="animated-section-wrapper soft-hide-form-small-only">
                                            <div className={`animated-section ${scrollTo === 2 ? 'sliding-out' : ''}`}>
                                                <div className="inner-text">
                                                    {banner && banner.titleLines ?
                                                        banner.titleLines.map((line) => {
                                                            return <div>
                                                                {line.text}
                                                            </div>
                                                        }) : <span/>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={`slider-inner-wrapper soft-hide-form-small-only ${showSlider ? 'added-padding' : ''}`}
                                            id='slider-container'>
                                            <div className="scrolling-section"/>
                                            {
                                                banner.slides.map((slide, index) => {
                                                    return <Element className="slider-content"
                                                                    name={'slide-' + index + 1}
                                                                    style={{
                                                                        backgroundImage: `url(${
                                                                            !!slide.image.childImageSharp ? slide.image.childImageSharp.fluid.src : slide.image
                                                                        })`,
                                                                        backgroundRepeat: 'no-repeat',
                                                                        backgroundSize: 'cover'
                                                                    }}/>
                                                })
                                            }

                                        </div>
                                    </div>
                                    <div className="slider-overlay soft-hide-form-small-only"/>
                                    <div className={'content-section'}>

                                        <div
                                            className={`content-text`}>
                                            {banner.slides.map((slide, index) => {
                                                return <div
                                                    key={index}
                                                    className={`inner-content-text  ${selectedTextIndex === index ? 'visible' : 'hidden'}`}>
                                                    {
                                                        slide.title
                                                    }
                                                </div>
                                            })
                                            }
                                        </div>


                                        <div className="button-section">
                                            <PrimaryButton text={'EXPLORE MORE'} click={() => {
                                                window.location.href = this.getProjectUrl(this.props.banner.projectName);
                                            }}/>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className={'right-image-section'}>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
