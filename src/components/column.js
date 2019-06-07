import React from "react"
import PropTypes from "prop-types"

import styled from "@emotion/styled"

const ColumnStyled = styled.div(
  {
    display: 'block',
    padding: '.75rem',
  }
)

const Column = ({ children, styles }) => (
  <ColumnStyled css={styles}>
    {children}
  </ColumnStyled>
)

Column.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.node,
}

export default Column
