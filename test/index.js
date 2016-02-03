import React, { Component } from "react"
import { createRenderer } from "react-addons-test-utils"
import must from "must"
import mustJSX from "../dist/index"

mustJSX(must)

class Test extends Component {
  render() {
    return <div>{this.props.name} will be avenged!</div>
  }
}

const render = component => {
  const renderer = createRenderer()
  renderer.render(component)
  return renderer.getRenderOutput()
}

describe(".jsx", function() {
  it("must return true if JSX is the same", function() {
    const el = <div> will be avenged!</div>
    render(<Test />).must.be.jsx(el)
  })

  it("must return false if JSX is different", function() {
    const el = <div>Larry will be avenged!</div>
    render(<Test name="Garry" />).must.not.be.jsx(el)
  })
})
