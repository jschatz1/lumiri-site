import CMS from "netlify-cms-app"
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from "./preview-templates/AboutPagePreview"
// import BlogPostPreview from "./preview-templates/BlogPostPreview"

import IndexPagePreview from "./preview-templates/IndexPagePreview"

// CMS.registerMediaLibrary(uploadcare)
// CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate("index", IndexPagePreview)
CMS.registerPreviewTemplate("about", AboutPagePreview)
CMS.registerPreviewTemplate("about dr. schatz", AboutPagePreview)
CMS.registerPreviewTemplate("prepare", AboutPagePreview)
CMS.registerPreviewTemplate("base", AboutPagePreview)
CMS.registerPreviewTemplate("specialties", AboutPagePreview)
