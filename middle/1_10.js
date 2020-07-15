/*
 * @Description:
 * @Autor: yetm
 * @Date: 2020-07-15 09:58:29
 * @LastEditors: yetm
 * @LastEditTime: 2020-07-15 09:58:57
 */
/**
 * @description: 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 * @author: yetm
 */
var lengthOfLongestSubstring = function (s) {
    let len = 0;
    let str = "";
    for (let i = 0; i < s.length; i++) {
        if (str.indexOf(s[i]) > -1) {
            str = str.substr(str.indexOf(s[i]) + 1) + s[i];
        } else {
            str += s[i];
        }
        len = len < str.length ? str.length : len;
    }
    return len;
};