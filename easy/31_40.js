/*
 * @Description:
 * @Autor: yetm
 * @Date: 2020-07-14 09:54:03
 * @LastEditors: yetm
 * @LastEditTime: 2020-07-14 10:22:24
 */
/**
 * @description: 31 解压缩编码列表
 * @param {number[]} nums
 * @return {number[]}
 * @author: yetm
 */
var decompressRLElist = function (nums) {
    let result = [];
    for (let i = 0; i < nums.length - 1; i += 2) {
        const arr = new Array(nums[i]).fill(nums[i + 1]);
        result = [...result, ...arr];
    }
    return result;
};
/**
 * @description:32 有多少小于当前数字的数字
 * @param {number[]} nums
 * @return {number[]}
 * @author: yetm
 */
var smallerNumbersThanCurrent = function (nums) {
    const sortArr = [...nums];
    sortArr.sort((a, b) => a - b);
    return nums.map(item => sortArr.findIndex(s => s === item));
};