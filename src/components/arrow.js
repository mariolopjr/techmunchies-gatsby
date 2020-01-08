import React from "react"
import PropTypes from "prop-types"

const Arrow = ({ height, styles, width }) => (
  <svg
    width={height}
    height={width}
    xmlns="http://www.w3.org/2000/svg"
    css={styles}
  >
    <g stroke="#000" fill="none" fillRule="evenodd">
      <path d="M8.5.964L13.036 5.5 8.5 10.036" />
      <path d="M12.5 5.5H.5" strokeLinecap="square" />
    </g>
  </svg>
)

Arrow.propTypes = {
  height: PropTypes.number,
  styles: PropTypes.object,
  width: PropTypes.number,
}

Arrow.defaultProps = {
  height: 14,
  width: 10,
}

export default Arrow
