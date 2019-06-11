import React from "react"
import { Global } from "@emotion/core"

export const colors = {
  bodybgcolor: "rgb(204, 204, 204)",
  bgcolor: "#3b424d",
  modalBgColor: "#ccc",
  modalTextColor: "#3b424d",
  modalBtnHoverColor: "rgba(10,10,10,.2)",
  textcolor: "#ccc",
  selectionColor: "#99a6b2",
  colorAccent: "white",
  textShadowColor: "#3b424d",
  fontFamily: `-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,
    Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif;`,
}

const sizes = [
  769, // desktop
  1088, // screen width
  1280, // screen width
  1472, // screen width
]

export const mq = sizes.map(bp => `@media screen and (min-width: ${bp}px)`)

export const mqp = sizes.map(
  bp => `@media print, screen and (min-width: ${bp}px)`
)

export const Theme = () => (
  <Global
    styles={{
      html: {
        fontSize: 16,
      },
      body: {
        backgroundColor: colors.bodybgcolor,
        color: "#4a4a4a",
        fontFamily: colors.fontFamily,
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 1.5,
        margin: 0,
        padding: 0,
        textRendering: "optimizeLegibility",
      },
      "::selection": {
        background: colors.selectionColor,
      },
    }}
  />
)

export default {
  colors,
}
