import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import CMS from "netlify-cms-app";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";
import TeamPagePreview from "./preview-templates/TeamPagePreview";
import cloudinary from "netlify-cms-media-library-cloudinary";
import uploadcare from "netlify-cms-media-library-uploadcare";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);
CMS.registerPreviewStyle(`cms.css`);
CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
// CMS.registerPreviewTemplate('team', TeamPagePreview)
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("team", TeamPagePreview);
