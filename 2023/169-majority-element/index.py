class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        majority = None
        if len(nums) % 2 == 0:
            majority = len(nums) / 2
        else:
            majority = (len(nums) // 2) + 1

        mapped_nums = {}

        for num in nums:
            if num in mapped_nums:
                mapped_nums[num] += 1
            else:
                mapped_nums[num] = 1

            if mapped_nums[num] >= majority:
                return num


        # for num in mapped_nums:
        #     if mapped_nums[num] >= majority:
        #         return num
