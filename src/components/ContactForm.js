import React, { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { navigate } from "gatsby"

export default () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = e => {
    const data = {
      "form-name": "contact",
      name,
      dateOfBirth,
      email,
      phone,
      message,
    }

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
    if (name === "dateOfBirth") {
      return setDateOfBirth(value)
    }
    if (name === "email") {
      return setEmail(value)
    }
    if (name === "phone") {
      return setPhone(value)
    }
    if (name === "message") {
      return setMessage(value)
    }
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
      <h2 className="is-size-3">Contact form</h2>
      <h3 className="is-size-4">
        Send us a message and your information. We will add you to our Patient
        Portal and be in-touch shortly.
      </h3>
      <form
        id="contact-form"
        name="contact"
        onSubmit={handleSubmit}
        className="contact__form"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input
          aria-label="hidden"
          type="hidden"
          name="form-name"
          value="Contact"
        />
        <div className="field">
          <label htmlFor="name" className="label">
            Name
          </label>
          <div>
            <input
              type="text"
              aria-label="name"
              className="input control"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="date" className="label">
            Date of Birth
          </label>
          <div>
            <input
              type="date"
              aria-label="date"
              className="input control"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="email" className="label">
            Email address
          </label>
          <div>
            <input
              type="email"
              aria-label="email"
              className="input control"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="phone" className="label">
            Phone Number
          </label>
          <div>
            <input
              type="tel"
              aria-label="tel"
              className="input control"
              name="phone"
              value={phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="message" className="label">
            Message
          </label>
          <div>
            <textarea
              className="textarea control"
              aria-label="message"
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
