[![Build Status](https://travis-ci.org/nwinch/must-jsx.svg?branch=master)](https://travis-ci.org/nwinch/must-jsx)

# must-jsx
Add JSX assertions to Must.js.

## Usage

```javascript
import must from "must"
import mustJSX from "must-jsx"

mustJSX(must)

...

// Test component
class Garry extends Component {
  render() {
    return <div>Garry will {this.props.will}</div>
  }
}

describe("Component", function() {
  it("must render correctly", function() {
    const el = <div>Garry will be avenged!</div>

    // React shallow renderer
    render(<Garry will="be avenged!" />).must.be.jsx(el)
  })
})

```
