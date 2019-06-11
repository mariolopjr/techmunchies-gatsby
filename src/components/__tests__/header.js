import React from "react"
import renderer from "react-test-renderer"

import Header from "../header"

const links = [`home`, `projects`, `blog`]

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Header siteName="techmunchies" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
