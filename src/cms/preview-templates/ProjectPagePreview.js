import {BlogPostTemplate} from "../../templates/blog-post";
import PropTypes from "prop-types";
import React from "react";
import ProjectPost from "../../templates/project-post";

const ProjectPagePreview = ({entry, widgetFor}) => (
    <>
        <ProjectPost
            data={{
                markdownRemark: {
                    frontmatter: {
                        title: entry.getIn(['data', 'title']),
                        fullName: entry.getIn(['data', 'fullName']),
                        domain: entry.getIn(['data', 'domain']),
                        subTitle: entry.getIn(['data', 'subTitle']),
                        state: entry.getIn(['data', 'state']),
                        tagLine: entry.getIn(['data', 'tagLine']),
                        id: entry.getIn(['data', 'id']),
                    }
                }
            }}
        >
        </ProjectPost>
    </>
);

ProjectPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func
    }),
    widgetFor: PropTypes.func
};

export default ProjectPagePreview;
