const moveZeroes = nums => {
    let i = 0;
    for (const num of nums) {
        if (num !== 0) {
            nums[i] = num;
            i++;
        }
    }
    nums.fill(0, i)
    return nums;
};