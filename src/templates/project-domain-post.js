import "../styles/BlogDetails.scss";

import Content, { HTMLContent } from "../components/Content";
import { Link, graphql } from "gatsby";

import Helmet from "react-helmet";
import Layout from "../components/Layout";
import PropTypes from "prop-types";
import React from "react";
import { kebabCase } from "lodash";

const ProjectDomain = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
   <></>
  );
};


export default ProjectDomain;
