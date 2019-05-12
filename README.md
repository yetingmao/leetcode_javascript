## 说明 ##
* 在leetcode上的题目
* 使用javascript语言
* 目前只有初级的题目，保证一周抽时间做一道

## 依赖 ##
* yetm

`````
1. Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

        const twoSum = (nums, target)=> {
        const arr=[];
        const len=nums.length;
        for(let i=0;i<len-1;i++){
        for(let j=i+1;j<len;j++){
            
          if(nums[i]+nums[j]===target){
              arr.push(i);
              arr.push(j);
            }
          }
        }
        return arr;
      };
`````

`````
2.Reverse Integer

Given a 32-bit signed integer, reverse digits of an integer.

var reverse = function (x) {
    if (x === 0) {
        return 0;
    }
    const a = `${x}`.split("").reverse().join("");
    let b = a.replace(/(^0*)(\w+)(-?)/, "$2");
    if (x < 0) {
        b = `-${b}`
    }
    if (b < Math.pow(-2, 31) || b > Math.pow(2, 31) - 1) {
        return 0;
    }
    return b;
};
`````

`````
3.Palindrome Number

Determine whether an integer is a palindrome. 
An integer is a palindrome when it reads the same backward as forward.

var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    const a = x.toString();
    if (a.length === 0) {
        return true;
    }
    const b = a.split("").reverse().join("");
    if (a === b) {
        return true;
    } else {
        return false;
    }
};
`````

`````
4. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return "";
    }
    let p = "";
    let cp = "";
    let i = 0;
    let result = true;
    do {
        let j = 0;
        for (const s of strs) {
            if (j === 0 && s[i]) {
                p = s[i];
            } else {
                if (p !== s[i]) {
                    result = false;
                    break;
                }
            }
            j++;
        }
        if (result) {
            cp += p;
        }
        console.log(4, cp);
        i++;
    } while (result && i < strs[0].length);
    return cp;
};
`````

`````
5. Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
 determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

var isValid = function (s) {
    if (s === undefined) {
        return false;
    }
    if (s.length % 2 === 1) {
        return false;
    }
    const a = [];
    let o = 1;
    let result = true;
    for (const i of s) {
        switch (i) {
            case "{":
                a.unshift(i);
                break;
            case "(":
                a.unshift(i);
                break;
            case "[":
                a.unshift(i);
                break;
            case "}":
                if (a[0] !== "{") {
                    result = false;
                } else {
                    a.shift();
                }
                break;
            case ")":
                if (a[0] !== "(") {
                    result = false;
                } else {
                    a.shift();
                }
                break;
            case "]":
                if (a[0] !== "[") {
                    result = false;
                } else {
                    a.shift();
                }
                break;
            default:
                break;
        }
        if (result === false) {
            break;
        }
        if (o === s.length) {
          if (a.length > 0) {
                result = false;
                break;
            }
        }
        o++;
    }
    return result;
};

//其他解法
* 这个方法超棒
    * 栈中放的只有当前需要出现的右部
	* 当出现一个左部的时候，就将应该出现的右部放入栈中
	* 当出现右部时和栈顶元素比较，如果不相同则返回FALSE
	* 最后栈为非空时也会返回FALSE
	* 都没有问题的时候会返回TRUE*

`````