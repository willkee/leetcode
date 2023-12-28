class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        # if len(nums) < 3: return len(nums)

        ptr = 1
        count = 1

        while (ptr < len(nums)):
            if nums[ptr] == nums[ptr - 1]:
                count += 1
            else:
                count = 1

            if count > 2:
                nums.pop(ptr)
            else:
                ptr += 1

        # ptr = 0
        # for i in range(len(nums)):
        #     if ptr < 2 or nums[i] != nums[ptr - 2]:
        #         if i != ptr: nums[ptr] = nums[i]
        #         ptr += 1
        # return ptr
