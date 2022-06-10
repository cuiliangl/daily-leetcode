// 二维数组的查找

const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

function findNumberIn2DArray(matrix, target) {
  if (matrix == null || matrix.length === 0 || matrix[0].length === 0) {
    return false
  }

  const rowLen = matrix.length
  let row = 0
  let col = matrix[0].length - 1

  while (row < rowLen && col >= 0) {
    const val = matrix[row][col]

    if (val > target) {
      col--
    } else if (val < target) {
      row++
    } else {
      return true
    }
  }

  return false
}

console.log(findNumberIn2DArray(matrix, 25))
console.log(findNumberIn2DArray(matrix, 5))
console.log(findNumberIn2DArray(matrix, 20))
