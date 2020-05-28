import React from "react"
import Layout from "../../components/Layout"
export default () => {
  return (
    <Layout>
      <section className="section contain" style={{ minHeight: "500px" }}>
        <div className="iframe-container" style={{ margin: "0 auto" }}>
          <iframe src={"/tele.html"} />
        </div>
      </section>
    </Layout>
  )
}
