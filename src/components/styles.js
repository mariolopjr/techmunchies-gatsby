import React from 'react'
import { Global } from '@emotion/core'


export const colors = {
  bodybgcolor: 'rgb(204, 204, 204)',
  bgcolor: '#3b424d',
  modalBgColor: '#ccc',
  modalTextColor: '#3b424d',
  modalBtnHoverColor: 'rgba(10,10,10,.2)',
  textcolor: '#ccc',
  selectionColor: '#99a6b2',
  colorAccent: '#fff',
  textShadowColor: '#3b424d',
  fontFamily: `-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,
    Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif;`,
}

export const global = {
  bodybgcolor: 'rgb(204, 204, 204)',
  bgcolor: '#3b424d',
  textcolor: '#ccc',
  selectionColor: '#99a6b2',
  colorAccent: '#fff',
  textShadowColor: '#3b424d',
  fontFamily: `-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,
    Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif;`,
}

export const Theme = () => (
  <Global
    styles={{
      body: {
        backgroundColor: colors.bodybgcolor,
        color: '#4a4a4a',
        fontFamily: colors.fontFamily,
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5,
        margin: 0,
        padding: 0,
        textRendering: 'optimizeLegibility',
      },
      '::selection': {
        background: colors.selectionColor,
      }
    }}
  />
)

export default {
  colors,
}
