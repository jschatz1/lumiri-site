import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
export default () => {
  return (
    <Layout>
      <section className="section contain" style={{ minHeight: "500px" }}>
        <h2 className="title is-3 has-text-centered">Telemedicine Call</h2>
        <h4 className="is-size-4 has-text-centered">
          Telemedicine calls are for existing patients. If you would like to
          establish care or schedule an appointment,{" "}
          <Link to="/contact">contact us here.</Link>
        </h4>
        <div className="iframe-container" style={{ margin: "0 auto" }}>
          <iframe src={"/tele.html"} />
        </div>
      </section>
    </Layout>
  )
}
