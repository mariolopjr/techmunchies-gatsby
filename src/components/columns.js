import React from "react"
import PropTypes from "prop-types"

import styled from "@emotion/styled"
import { mqp } from "./styles"

const ColumnsStyled = styled.div({
  marginLeft: "-.75rem",
  marginRight: "-.75rem",
  marginTop: "-.75rem",

  ":last-of-type": {
    marginBottom: "-.75rem",
  },

  [mqp[0]]: {
    display: "flex",
  },
})

const Columns = ({ children, styles }) => (
  <ColumnsStyled css={styles}>{children}</ColumnsStyled>
)

Columns.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.object,
}

export default Columns
