import React, { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { navigate } from "gatsby"

export default () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = e => {
    const data = { "form-name": "contact", name, email, message }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(data),
    })
      .then(() => {
        navigate("/success")
      })
      .catch(error => {
        toast.error("Message Failed to Send", error)
        console.log(error)
      })

    e.preventDefault()
  }

  const handleChange = e => {
    const { name, value } = e.target
    if (name === "name") {
      return setName(value)
    }
    if (name === "email") {
      return setEmail(value)
    }
    if (name === "message") {
      return setMessage(value)
    }
  }

  const boxStyle = {
    margin: "20px",
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h2 className="title">Contact</h2>
      <form
        id="contact-form"
        name="contact"
        onSubmit={handleSubmit}
        className="contact__form"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="Contact" />
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              type="text"
              className="input"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Email address</label>
          <div className="control">
            <input
              type="email"
              className="input"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              className="textarea"
              rows="5"
              name="message"
              value={message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>
        <button type="submit" className="button primary">
          Submit
        </button>
      </form>
    </>
  )
}
