import ReactElementToJSXString from "react-element-to-jsx-string"

export default function(Must) {
  Must.prototype.jsx = function(expected) {
    var actual = ReactElementToJSXString(this.actual)
    var expected = ReactElementToJSXString(expected)

    this.assert(actual === expected, "equal JSX",  { expected: expected })
  }
}
