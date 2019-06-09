import React from "react"
import PropTypes from "prop-types"

import styled from "@emotion/styled"
import { colors, mqp } from "./styles"

const modalState = {
  true: {
    display: "flex",
  },
}

const ModalStyled = styled.div(
  {
    alignItems: "center",
    color: colors.modalTextColor,
    display: "none",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
    position: "fixed",
    zIndex: 40,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },

  props => modalState[props.state]
)

const ModalBackground = styled.div({
  backgroundColor: colors.modalBgColor,
  bottom: 0,
  left: 0,
  position: "absolute",
  right: 0,
  top: 0,
})

const ModalContent = styled.div({
  color: colors.modalTextColor,
  zIndex: "60",

  [mqp[0]]: {
    margin: "0 auto",
    maxHeight: "calc(100vh - 40px)",
    overflow: "auto",
    position: "relative",
    width: 640,
  },
})

const ModalText = styled.div({
  color: colors.modalTextColor,
  fontSize: "2.5rem",
  fontWeight: 300,
  textAlign: "center",
})

const ModalButton = styled.button({
  background: "none",
  border: "none",
  borderRadius: 290486,
  cursor: "pointer",
  display: "inline-block",
  flexGrow: 0,
  flexShrink: 0,
  fontSize: 0,
  height: 32,
  margin: 0,
  maxHeight: 32,
  maxWidth: 32,
  minHeight: 32,
  minWidth: 32,
  outline: "none",
  pointerEvents: "auto",
  position: "fixed",
  right: 20,
  top: 20,
  userSelect: "none",
  verticalAlign: "top",
  zIndex: "60",

  ":active, :focus, :hover": {
    backgroundColor: colors.modalBtnHoverColor,

    ":before, :after": {
      backgroundColor: "white",
    },
  },

  ":before, :after": {
    backgroundColor: colors.modalTextColor,
    content: '""',
    display: "block",
    left: "50%",
    position: "absolute",
    top: "50%",
    transform: "translateX(-50%) translateY(-50%) rotate(45deg)",
    transformOrigin: "center center",
  },

  ":before": {
    height: 2,
    width: "50%",
  },

  ":after": {
    height: "50%",
    width: 2,
  },
})

const Modal = ({ onClick, state, title }) => (
  <ModalStyled state={state}>
    <ModalBackground className="modal-background" onClick={onClick} />
    <ModalContent>
      <ModalText>{title}</ModalText>
    </ModalContent>
    <ModalButton aria-label="close" onClick={onClick} />
  </ModalStyled>
)

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  state: PropTypes.bool,
  title: PropTypes.string.isRequired,
}

export default Modal
