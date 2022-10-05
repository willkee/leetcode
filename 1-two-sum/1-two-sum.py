class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        uniqueNums = set(nums)
        for i in range(len(nums)):
            remainder = target - nums[i]
            if remainder in uniqueNums and nums.index(remainder) is not i:
                return [i, nums.index(remainder)]

        
            
        