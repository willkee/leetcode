class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        # this is applicable if k is longer than the length of nums
        # if k is length of nums, nothing changes
        # we want to take the modulo of k and the lenth of nums to make it more efficient.
        k = k % len(nums)

        # while k > 0:
        #     # remove the last value
        #     temp = nums.pop()

        #     # insert the last popped value to the front of the list
        #     nums.insert(0, temp)

        #     # decrement k
        #     k -= 1

        # O(n) space, O(n) time
        fixed_section = nums[:-k]
        rotated_section = nums[-k:]
        nums[:] = rotated_section + fixed_section
