// 有序数组求平方

// 思路：双指针对撞
function sortedSquares(nums) {
  if (nums == null) return nums

  let i = 0
  let j = (k = nums.length - 1)
  const res = []

  while (i <= j) {
    const head = Math.pow(nums[i], 2)
    const tail = Math.pow(nums[j], 2)

    if (head > tail) {
      res[k--] = head
      i++
    } else {
      res[k--] = tail
      j--
    }
  }

  return res
}

console.log(sortedSquares([-4, -3, 0, 3, 5]))
console.log(sortedSquares([-2, 0, 2, 3, 5]))
console.log(sortedSquares([0]))
console.log(sortedSquares([-2]))
