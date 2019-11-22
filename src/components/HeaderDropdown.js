import React, {useState} from 'react';
import {graphql, StaticQuery} from "gatsby";

export const HeaderDropDownComponent = ({data}) => {
    let loosingFocusTimeout;

    const [focused, changeFocus] = useState(
        false
    );
    const [focusedHeadItemIndex, changeFocusOnHeadItem] = useState(
        0
    );
    const looseFocus = () => {
        loosingFocusTimeout = setTimeout(() => {
            changeFocus(false);
            loosingFocusTimeout = null;
        }, 200);
    };
    const setFocus = () => {
        if (loosingFocusTimeout) {
            clearTimeout(loosingFocusTimeout);
        }
        changeFocus(true)
    };
    const {edges: projects} = data.allMarkdownRemark;
    let domains = [];
    projects.forEach((project) => {
        let found = false;
        project.projectUrl = project.node.fields.slug;
        domains.forEach((domain) => {
            if (domain.name === project.node.frontmatter['domain']) {
                found = true;
                domain.projects.push(project);
                domain.projects = domain.projects.sort(function (a, b) {
                    return b.node.frontmatter.title > a.node.frontmatter.title ? -1 : 1;
                });
            }
        });
        if (!found) {
            domains.push({name: project.node.frontmatter['domain'], activeProjectIndex: 0, projects: [project]})
            domains = domains.sort(function (a, b) {
                return b.name > a.name ? -1 : 1;
            });
        }
    });

    return (
        <li onMouseEnter={() => setFocus()} onMouseLeave={() => looseFocus()}
            className={`${focused ? 'focused' : ''}`}>
            <a className="nav-link" href="#">OUR WORK</a>
            <div className={'sub-menu'} style={{width: '700px'}}>
                <div className={"head-items-wrapper"}>
                    {
                        domains.map((item, index) => {
                            return <div key={index}
                                        className={`head-item ${focusedHeadItemIndex === index ? 'head-focused' : ''}`}
                                        onMouseEnter={() => changeFocusOnHeadItem(index)}>
                                {
                                    item.name
                                }
                            </div>;
                        })
                    }
                </div>
                {
                    domains && domains[focusedHeadItemIndex] ? <div className={"sub-head-items-wrapper"}>
                        {
                            domains[focusedHeadItemIndex].projects.map((item, index) => {
                                return <a href={item.projectUrl}>
                                    <div key={index} className={`head-item`}>
                                        {
                                            item.node.frontmatter.title
                                        }
                                    </div>
                                </a>;
                            })
                        }
                    </div> : <div/>
                }

            </div>
        </li>
    )
};

export default () => (
    <StaticQuery
        query={graphql`
      query ProjectHeaderListQuery {
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
                templateKey
                domain
              }
            }
          }
        }
      }
    `}
        render={(data, count) => <HeaderDropDownComponent data={data}/>}
    />
)
