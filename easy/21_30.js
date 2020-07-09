/*
 * @Description:
 * @Autor: yetm
 * @Date: 2020-07-09 11:07:35
 * @LastEditors: yetm
 * @LastEditTime: 2020-07-09 14:30:50
 */
/**
 * @description:21 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。请返回 nums 的动态和。
 * @param{number[]} nums
 * @return: {number[]}
 * @author: yetm
 */
var runningSum = function (nums) {
    const result = [];
    const last = nums.reduce((total, val, i) => {
        result.push(total);
        return total + val
    });
    result.push(last);
    return result;
};
/**
 * @description:22 拥有最多糖果的孩子
 * @param {type} {number[]} candies  
 * @param {number} extraCandies
 * @return:  {boolean[]}
 * @author: yetm
 */
var kidsWithCandies = function (candies, extraCandies) {
    const arr = [...candies].sort((a, b) => a - b);
    const max = arr[arr.length - 1];
    return candies.map(item => item + extraCandies >= max);
};