/*
 * @Description:
 * @Autor: yetm
 * @Date: 2020-07-09 11:07:35
 * @LastEditors: yetm
 * @LastEditTime: 2020-07-09 16:52:14
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
/**
 * @description:23 重新排列数组
 * @param {type} 
 * @return: 
 * @author: yetm
 */
var shuffle = function (nums, n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        for (let j = i; j < nums.length; j += n) {
            result.push(nums[j]);
        }
    }
    return result
};
var shuffle1 = function (nums, n) {
    const result = [];
    for (let j = 0; j < nums.length / 2; j++) {
        result.push(nums[j], nums[j + n]);
    }
    return result
};
var shuffle2 = function (nums, n) {
    const result = [];
    const newArr = nums.splice(n, n);
    for (let j = 0; j < nums.length; j++) {
        result.push(nums[j], newArr[j]);
    }
    return result
};