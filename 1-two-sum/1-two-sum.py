class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # start with 2 pointers
        # from the 2 pointers in the list, get the middle
        
        # for i in range(len(nums)):
        #     for j in range(len(nums)):
        #         if (i != j):
        #             if (nums[i] + nums[j] == target):
        #                 return [i, j]
        
        # sortedNums = nums.copy();
        uniqueNums = set(nums)
        
        for i in range(len(nums)):
            remainder = target - nums[i]
            if remainder in uniqueNums and nums.index(remainder) != i:
                return [i, nums.index(remainder)]
            
            
        # for (let i = 0; i < nums.length; i++) {
        # let remainder = target - nums[i];
        # if (numsSet.has(remainder) && nums.indexOf(remainder) !== i) {
        #     return [i, nums.indexOf(remainder)]
        # }
        # }
    
#         sortedNums.sort();
        
#         left = 0
#         right = len(sortedNums) - 1
#         while (left < right):
#             print(left, right)
#             if (sortedNums[left] + sortedNums[right] == target):
#                 leftIndex = nums.index(sortedNums[left])
#                 rightIndex = nums.index(sortedNums[right])
#                 return [leftIndex, rightIndex]
            
#             if (sortedNums[left] + sortedNums[right] < target):
#                 left += 1
#             elif (sortedNums[left] + sortedNums[right] > target):
#                 right -= 1
        
            
        