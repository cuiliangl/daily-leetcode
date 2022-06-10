// 两数之和

// 暴力法
// 复杂度： O(n^2)
function twoSum(arr, num) {
  if (arr == null || arr.length < 2) return []

  const len = arr.length

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      const sum = arr[i] + arr[j]

      if (sum === num) return [0, j]
    }
  }

  return []
}

// hash + 遍历
// 复杂度：
//  时间：O(n)
//  空间：O(1)
function twoSum1(arr, num) {
  if (arr == null || arr.length < 2) return []

  const hash = {}
  const len = arr.length

  for (let i = 0; i < len; i++) {
    const val = arr[i]
    const rest = num - val

    if (hash[rest]) return [hash[rest], i]

    hash[val] = i
  }

  return []
}
