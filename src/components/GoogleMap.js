import React from "react"
import GoogleMapReact from "google-map-react"
export default () => {
  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBNZtzEVJ-jzTlnehtwZ6DnWD99klYx8e0" }}
        defaultCenter={{
          lat: 59.95,
          lng: 30.33,
        }}
        defaultZoom={11}
      ></GoogleMapReact>
    </div>
  )
}
