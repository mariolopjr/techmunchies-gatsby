import React from "react"
import PropTypes from "prop-types"

import styled from "@emotion/styled"

const ColumnStyled = styled.div(
  {
    display: 'block',
    flexBasis: 0,
    flexGrow: 1,
    flexShrink: 1,
    padding: '.75rem',
  }
)

const Column = ({ children, onClick, styles }) => (
  <ColumnStyled css={styles} onClick={onClick}>
    {children}
  </ColumnStyled>
)

Column.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.object,
}

export default Column
