// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

var generateParenthesis = function (n) {
  const res = []
  let left = 0,
    right = 0

  function _gen(result, left, right, str) {
    // console.log(left, right, str)
    if (str.length === 2 * n) {
      result.push(str)
      return
    }

    if (left < n) {
      _gen(result, left + 1, right, str + '(')
    }

    if (left > right) {
      _gen(result, left, right + 1, str + ')')
    }
  }

  _gen(res, left, right, '')

  return res
}
