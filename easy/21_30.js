/*
 * @Description:
 * @Autor: yetm
 * @Date: 2020-07-09 11:07:35
 * @LastEditors: yetm
 * @LastEditTime: 2020-07-09 11:08:23
 */
/**
 * @description: 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。请返回 nums 的动态和。
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