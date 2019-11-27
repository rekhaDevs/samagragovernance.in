import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'
import {TeamPage} from "../../templates/team-page";

const TeamPagePreview = ({ entry, widgetFor }) => (
  <TeamPage
    data={{
          markdownRemark: {
            frontmatter: {
              title: entry.getIn(["data", "title"]),
              bannerImage: entry.getIn(["data", "bannerImage"]),
              subTitle: entry.getIn(["data", "subTitle"]),
              team: [
                {
                  image: entry.getIn(["data", "team", "image"]),
                  name: entry.getIn(["data", "team", "name"]),
                  bio: entry.getIn(["data", "team", "bio"]),
                  project: entry.getIn(["data", "team", "project"]),
                  linkedInProfile: entry.getIn(["data", "team", "linkedInProfile"]),
                }
              ]
            }
          }
        }
    }
  />
)

TeamPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TeamPagePreview
