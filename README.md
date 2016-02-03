[![Build Status](https://travis-ci.org/nwinch/must-jsx.svg?branch=master)](https://travis-ci.org/nwinch/must-jsx)

# must-jsx
Add JSX assertions to Must.js.

## Usage

```javascript
import must from "must"
import mustJSX from "must-jsx"

mustJSX(must)

...

describe("Component", function() {
  it("must render correctly", function() {
    <Component name="Garry" />.must.be.jsx(<Component name="Garry" />)
  })
})

```
