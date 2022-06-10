// 给你一个整数数组 nums 和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，满足 nums[i] == nums[j] 且 abs(i - j) <= k
// 如果存在，返回 true ；否则，返回 false 。

function containsNearbyDuplicate(nums, k) {
  if (nums == null || nums.length < 2) return false
  const hash = {}

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i]

    if (hash[val] >= 0 && Math.abs(hash[val] - i) <= k) {
      return true
    } else {
      hash[val] = i
    }
  }

  return false
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))
