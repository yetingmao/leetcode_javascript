/*
 * @Description:
 * @Autor: yetm
 * @Date: 2020-07-09 11:07:35
 * @LastEditors: yetm
 * @LastEditTime: 2020-07-13 17:38:58
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
/**
 * @description:24左旋转字符串
 * @param {type}{string} s
 * @param {number} n
 * @return:{string}
 * @author: yetm
 */
var reverseLeftWords = function (s, n) {
    return s.substr(n) + s.substr(0, n);
};
/**
 * @description:25 猜数字
 * @param {type} {number[]} guess 
 * @param {number[]} answer
 * @return: {number}
 * @author: yetm
 */
var game = function (guess, answer) {
    let n = 0;
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === answer[i]) {
            n++;
        }
    }
    return n;
};
var game1 = function (guess, answer) {

    return (guess.filter((n, i) => n === answer[i])).length;
};
/**
 * @description:26宝石与石头
 * @param {string} J
 * @param {string} S
 * @return {number}
 * @author: yetm
 */
var numJewelsInStones = function (J, S) {
    let n = 0;
    for (const i of S) {
        if (J.includes(i)) {
            n++;
        }
    }
    return n;
};
/**
 * @description:27 整数的各位积和之差
 * @param {number} n
 * @return {number}
 * @author: yetm
 */
var subtractProductAndSum = function (n) {
    const arr = `${n}`.split('');
    let s = 1;
    let m = 0;
    for (const i of arr) {
        s *= parseInt(i, 10);
        m += parseInt(i, 10);
    }
    return s - m;
};
/**
 * @description:28 IP 地址无效化
 * @param {string} address
 * @return {string}
 * @author: yetm
 */
var defangIPaddr = function (address) {
    return address.replace(/\./g, "[.]")
};
/**
 * @description:29 将数字变成 0 的操作次数
 * @param {number} num
 * @return {number}
 * @author: yetm
 */
var numberOfSteps = function (num) {
    if (num === 0) {
        return 0
    }
    const data = num % 2 === 0 ? num / 2 : num - 1;
    return data === 0 ? 1 : 1 + numberOfSteps(data)
};
var numberOfSteps1 = function (num) {
    // 这里>>位运算符的意思是如果是偶数等于除于了2，如果是计数则是除于了2又减去了1
    return num > 1 ? 1 + (num % 2) + numberOfSteps1(num >> 1) : num
};

/**
 * @description: 30 按既定顺序创建目标数组
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 * @author: yetm
 */
var createTargetArray = function (nums, index) {
    const result = [];
    for (let i = 0; i < index.length; i++) {
        result.splice(index[i], 0, nums[i])
    }
    return result;
};