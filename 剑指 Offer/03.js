// 数组中重复的数字
// 注意：数字不在 0 ～ n-1 的范围内，或者数组不包含重复数字返回-1，否则返回重复的数字

function findRepeatNumber(nums) {
  let i = (j = 0)
  const hash = {}
  const len = nums.length

  while (i < len) {
    const val = nums[i++]
    if (val < 0 || val > len - 1) return -1
  }

  while (j < len) {
    const val = nums[j++]

    if (hash[val]) return val
    hash[val] = true
  }

  return -1
}

console.log(findRepeatNumber([2, 2, 3, 0])) // 2
console.log(findRepeatNumber([2, -1, 3, 0, 4])) // -1
console.log(findRepeatNumber([2, 1, 3, 6, 4, 5])) // -1
