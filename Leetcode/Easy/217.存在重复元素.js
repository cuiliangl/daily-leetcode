// 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。

function containsDuplicate(nums) {
  if (nums == null || nums.length < 2) return false

  const hash = {}

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i]

    if (hash[val]) return true
    hash[val] = true
  }

  return false
}

console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
