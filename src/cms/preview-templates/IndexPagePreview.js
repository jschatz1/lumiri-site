import React from "react"
import PropTypes from "prop-types"
import { IndexPageTemplate } from "../../templates/index-page"
import Content, { HTMLContent } from "../../components/Content"

const IndexPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    console.log(widgetFor("body").props.value)
    return (
      <IndexPageTemplate
        title={data.title}
        heading={data.heading}
        main={data.main}
        content={widgetFor("body")}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default IndexPagePreview
