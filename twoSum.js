// 两数之和
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

console.log(
  'nums: [2, 7, 11, 15], target: 9, return: [0, 1] =>',
  twoSum([2, 7, 11, 15], 9)
)
console.log(
  'nums: [3, 2, 4], target: 6, return: [1, 2] =>',
  twoSum([3, 2, 4], 6)
)
console.log('nums: [3, 3], target: 6, return: [0, 1] =>', twoSum([3, 3], 6))
