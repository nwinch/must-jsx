import ReactElementToJSXString from "react-element-to-jsx-string"

export default function(Must) {
  Must.prototype.jsx = function(expected) {
    const actual = ReactElementToJSXString(this.actual)
    const transformed = ReactElementToJSXString(expected)
    const opts = { actual, expected: transformed }

    this.assert(actual === transformed, "equal JSX", opts)
    return this
  }
}
