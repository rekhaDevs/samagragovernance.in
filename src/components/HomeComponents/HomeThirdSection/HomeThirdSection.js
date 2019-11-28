import React, {useState} from "react";

import {PrimaryButton} from "../../PrimaryButton/PrimaryButton";
import {graphql, StaticQuery} from "gatsby";
import Swiper from "react-id-swiper";


const HomeThirdSectionContent = ({data, previewData}) => {
    const {edges: projectData} = previewData ? previewData.allMarkdownRemark : data.allMarkdownRemark;
    console.log(previewData, data);
    let items = [];
    projectData.forEach((project) => {
        let found = false;
        project.projectUrl = project.node.fields.slug;
        items.forEach((domain) => {
            if (domain.name === project.node.frontmatter['domain']) {
                found = true;
                domain.projects.push(project);
                domain.projects = domain.projects.sort(function (a, b) {
                    return b.node.frontmatter.title > a.node.frontmatter.title ? -1 : 1;
                });
            }
        });
        if (!found) {
            items.push({name: project.node.frontmatter['domain'], activeProjectIndex: 0, projects: [project]})
            items = items.sort(function (a, b) {
                return b.name > a.name ? -1 : 1;
            });
        }
    });

    const [activeItem, setActiveItem] = useState(
        0
    );
    let projects = [];
    items.forEach((item) => {
        projects = [...projects, ...item.projects];
    });
    const [stateItems, setStateItems] = useState(
        items
    );
    let swiperInstance;
    let swiperTitleInstance;
    const params = {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'home-domain-page-indicator',
            bulletActiveClass: 'home-domain-page-indicator-active',
            clickableClass: 'home-domain-bullets'
        },
        on: {
            'init': () => {
            },
            'slideChange': (d) => {
                if (swiperInstance) {
                    if (swiperTitleInstance) {
                        let titleIndex = 0;
                        items.forEach((item, index) => {
                            if (item.name === projects[swiperInstance.activeIndex].domain) {
                                titleIndex = index;
                            }
                        });
                        setTimeout(() => {
                            swiperTitleInstance.slideTo(titleIndex);
                        }, 100);
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
            <div className="translucent-dark-overlay" style={{background: 'white', padding: '0 0 30px 0'}}>
                <div className={'title'} style={{color: '#343434'}}>
                    We work with state governments across domains
                </div>
                <div className={'content-section container hide-for-small-only'} style={{marginTop: '25px'}}>
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

                    <div className="right-section">
                        <div className={`project-name`}>
                            <div className="text">
                                {stateItems[activeItem].projects[stateItems[activeItem].activeProjectIndex].node.frontmatter.fullName || stateItems[activeItem].projects[stateItems[activeItem].activeProjectIndex].node.frontmatter.title}
                            </div>
                            <div className="project-tag-line">
                                <img
                                    src={stateItems[activeItem].projects[stateItems[activeItem].activeProjectIndex].node.frontmatter.projectLogoWithState ? (stateItems[activeItem].projects[stateItems[activeItem].activeProjectIndex].node.frontmatter.projectLogoWithState.childImageSharp.fluid.src
                                    ) : stateItems[activeItem].projects[stateItems[activeItem].activeProjectIndex].node.frontmatter.projectLogoWithState}/>
                            </div>
                        </div>

                        <div className={'image-section'}>
                            <div className="description-wrapper">

                                <div className="overview">
                                    <div className="para">
                                        {
                                            stateItems[activeItem].projects[stateItems[activeItem].activeProjectIndex].node.frontmatter.overview.map((o) => {
                                                return <p>
                                                    {o.text}
                                                </p>
                                            })
                                        }
                                    </div>
                                    <a href={stateItems[activeItem].projects[stateItems[activeItem].activeProjectIndex].projectUrl}>
                                        <div className="read-more-text">
                                            Read More
                                        </div>
                                    </a>
                                </div>

                            </div>
                            <div className="image-wrapper">
                                <div className="scale-card">
                                    <div className="list">
                                        {
                                            stateItems[activeItem].projects[stateItems[activeItem].activeProjectIndex].node.frontmatter.scale.map((s) => {
                                                return <div className="list-item">
                                                    <div className="count">
                                                        {s.count}
                                                    </div>
                                                    <div className={'description'}>
                                                        {s.label}
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
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
                </div>
            </div>
        </div> : <div/>
    )
};

export default ({previewData}) => (
    <StaticQuery
        query={graphql`
      query ProjectListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "project-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                domain
                fullName
                subTitle
                state
                tagLine
                backgroundCover  {
                    childImageSharp {
                        fluid(maxWidth: 1024, quality: 100) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                }
                projectLogoWithState  {
                    childImageSharp {
                        fluid(maxWidth: 240, quality: 64) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                }
                approach {
                    text
                }
               
                overview {
                    text
                }
                scale {
                    count
                    label
                }
                impact {
                    count
                    label 
                }
                projectMiddleBannerImage {
                   childImageSharp {
                    fluid(maxWidth: 240, quality: 64) {
                      ...GatsbyImageSharpFluid
                        }
                    }
                }
                keyInitiatives {
                    image {
                        childImageSharp {
                        fluid(maxWidth: 240, quality: 64) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                    title
                    description {
                        text
                    }
                }
                }
            }
          }
        }
      }
    `}
        render={(data, count) => <HomeThirdSectionContent previewData={previewData} data={data}/>}
    />
)

const SlideItem = ({classes, item}) => {
    return (
        <div className="card-outer-wrapper">
            <div className="card-wrapper">
                <div className="title">
                    {item.title}
                </div>
                <div className="image">
                    <img
                        src={item.projectLogoWithState}/>
                </div>
                <div className="description">
                    <div className="sub-title">
                        Overview
                    </div>
                    {
                        item.overview[0]
                    }
                </div>
                <PrimaryButton text={'EXPLORE MORE'} click={() => {
                    window.location.href = `/projects/${filterUrl(item.domain)}/${filterUrl(item.title)}`;
                }}/>
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

const filterUrl = (str) => {
    let result = '';
    str = str.replace(/ /g, '-').toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if ('ascdfeghijklmnopqrstuvwxyz0123456789-'.indexOf(str[i]) > -1) {
            result += str[i];
        }
    }
    return result;
};
