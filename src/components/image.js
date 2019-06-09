import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import styled from "@emotion/styled"

const ImageStyled = styled(Img)({
  boxShadow: "0 3px 8px 0 rgba(0,0,0,0.4), 0 0 0 1px rgba(0,0,0,0.16)",
  borderRadius: 4,
  border: 0,
  maxWidth: 660,
  opacity: 0.7,
  transition: "all 0.3s ease-in-out",

  ":active, :focus, :hover": {
    boxShadow:
      "0 16px 38px -12px rgba(0,0,0,.56), 0 4px 25px 0 rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.2)",
    cursor: "pointer",
    opacity: 1,
    transition: "all 0.3s ease-in-out",
  },
})

const Image = ({ children, sizes, styles }) => (
  <ImageStyled css={styles} sizes={sizes} />
)

Image.propTypes = {
  sizes: PropTypes.object.isRequired,
  styles: PropTypes.object,
}

export default Image
