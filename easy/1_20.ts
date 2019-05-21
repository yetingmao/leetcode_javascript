//Two Sum(两数之和)
const twoSum = (nums: number[], target: number) => {
    const arr = [];
    const len = nums.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] === target) {
                arr.push(i);
                arr.push(j);
            }
        }
    }
    return arr;
};
