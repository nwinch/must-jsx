import ReactElementToJSXString from "react-element-to-jsx-string"

export default function(Must, custom) {
  const opts = custom ? { isElement: custom } : {}

  Must.prototype.jsx = function(expected) {
    const actual = ReactElementToJSXString(this.actual, opts)
    const transformed = ReactElementToJSXString(expected, opts)

    this.assert(actual === transformed, "equal JSX",  { expected: expected })
  }
}
