import {BlogPostTemplate} from "../../templates/blog-post";
import PropTypes from "prop-types";
import React from "react";
import {ProjectPostTemplate} from "../../templates/project-post";
import HomeThirdSection from "../../components/HomeComponents/HomeThirdSection/HomeThirdSection";

const ProjectPagePreview = ({entry, getAsset}) => {
    const data = entry.getIn(['data']).toJS()
    const previewData = {
        allMarkdownRemark: {
            edges: [
                {
                    fields: {
                        slug: ''
                    },
                    node: {
                        frontmatter: data
                    }
                }
            ]
        }
    };
    console.log('preview Data 1 =====', previewData)
    if (data) {
        return (
            <React.Fragment>
                <ProjectPostTemplate
                    project={data}
                />
                <HomeThirdSection previewData={previewData}/>
            </React.Fragment>
        )
    } else {
        return <div>Loading...</div>
    }
}

ProjectPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func
    }),
    widgetFor: PropTypes.func
};

export default ProjectPagePreview;
