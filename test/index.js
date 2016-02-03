import React, { Component } from "react"
import must from "must"
import mustJSX from "../dist/index"

mustJSX(must)

class Test extends Component {
  render() {
    return <div>{this.props.name} will be avenged!</div>
  }
}

describe(".jsx", function() {
  it("must return true if JSX is the same", function() {
    <Test />.must.be.jsx(<Test />)
  })

  it("must return false if JSX is different", function() {
    <Test name="Garry" />.must.not.be.jsx(<Test />)
  })
})
