## 说明 ##
* 在leetcode上的题目
* 使用javascript语言
* 目前只有初级的题目，保证一周抽时间做一道

## 依赖 ##
* yetm

### Two Sum(两数之和)
#### 给定一个整数数组nums和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
#### 你可以假设每种输入只会对应一个答案。但是你不能重复利用这个数组中同样的元素。
`````
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
************
### Reverse Integer(整数反转)
#### 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
`````
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
************
### Palindrome Number(回文数)
#### 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
`````
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
************
 ###  Longest Common Prefix(最长公共前缀)
#### 编写一个函数来查找字符串数组中的最长公共前缀，如果不存在公共前缀，返回空字符串 ""。
`````
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
************
### Valid Parentheses(有效的括号)
#### 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
#### 有效字符串需满足：左括号必须用相同类型的右括号闭合。左括号必须以正确的顺序闭合。注意空字符串可被认为是有效字符串。

`````
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

`````
### 其他解法
##### 栈中放的只有当前需要出现的右部
##### 当出现一个左部的时候，就将应该出现的右部放入栈中
##### 当出现右部时和栈顶元素比较，如果不相同则返回FALSE
##### 最后栈为非空时也会返回FALSE
##### 都没有问题的时候会返回TRUE*

************
### Remove Duplicates from Sorted Array(移除元素)(第一个方法是废的)
#### 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。
#### 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
#### 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
`````
var removeDuplicates = function(nums) {
      const map = new Map();
    nums.reverse();
    for (const k of nums) {
        if (map.has(k)) {
            const n = map.get(k);
            map.set(k, n + 1)
        } else {
            map.set(k, 0);
        }
    }
    nums.reverse();
    for (const [k, n] of map) {
        if (n > 0) {
            const i = nums.indexOf(k);
            nums.splice(i, n);
        }
    }
    return nums.length;
};
var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length
};
`````
************