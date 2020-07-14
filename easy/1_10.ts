//1，Two Sum(两数之和)
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
var twoSum2 = function (nums, target) {
    let i = nums.length;
    while (i > 1) {
        const last = nums.pop();
        if (nums.indexOf(target - last) > -1) {
            return [nums.indexOf(target - last), nums.length];
        }
        i--;
    }
};

//2，Reverse Integer(整数反转)
const reverse = function (x: number) {
    if (x === 0) {
        return 0;
    }
    const a = `${x}`.split("").reverse().join("");
    let b = a.replace(/(^0*)(\w+)(-?)/, "$2");
    if (x < 0) {
        b = `-${b}`
    }
    if (parseInt(b, 10) < Math.pow(-2, 31) || parseInt(b, 10) > Math.pow(2, 31) - 1) {
        return 0;
    }
    return b;
};

//3,Palindrome Number(回文数)
const isPalindrome = function (x: number) {
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

//4,Longest Common Prefix(最长公共前缀)
const longestCommonPrefix = function (strs: string[]) {
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
        i++;
    } while (result && i < strs[0].length);
    return cp;
};

//5,Valid Parentheses(有效的括号)
const isValid = function (s: string) {
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

//6,Remove Duplicates from Sorted Array(删除排序数组中的重复项)
const removeDuplicates1 = function (nums: number[]) {
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
const removeDuplicates = function (nums: number[]) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length
};

//7,Remove Element(移除元素)
const removeElement = function (nums: number[], val: number) {
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (n === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};

//8,Search Insert Position(搜索插入位置)
var searchInsert = function (nums: number[], target: number) {
    let n = nums.indexOf(target);
    if (n === -1) {
        if (target <= nums[0]) {
            n = 0;
        } else if (target >= nums[nums.length - 1]) {
            n = nums.length;
        } else {
            for (let index = 0; index < nums.length; index++) {
                if (target >= nums[index] && target <= nums[index + 1]) {
                    n = index + 1;
                    break;
                }
            }
        }
    }
    return n;
    // const n = nums.indexOf(target);
    // if (n > -1) {
    //     return n;
    // }
    // if (target <= nums[0]) {
    //     nums.unshift(target);
    // } else if (target >= nums[nums.length - 1]) {
    //     nums.push(target);
    // } else {
    //     for (let index = 0; index < nums.length; index++) {
    //         if (target >= nums[index] && target <= nums[index + 1]) {
    //             nums.splice(index, 0, target);
    //             break;
    //         }
    //     }
    // }
    // return nums;
};
// 9.Count and Say(报数)
const countAndSay = function (n: number) {
    let i = 1;
    let a = "1";
    do {
        if (i >= n) {
            break;
        }
        i++;
        let k: string[] = [];
        let v: number[] = [];
        for (let index = 0; index < a.length; index++) {
            if (k[k.length - 1] === a[index]) {
                v[v.length - 1] = v[v.length - 1] + 1;
            } else {
                k.push(a[index]);
                v.push(1);
            }
        }
        let a1 = "";
        for (let index = 0; index < k.length; index++) {
            a1 += `${v[index]}${k[index]}`;
        }
        a = a1;
    } while (i < n);
    return a;
};
//10.最大子序和
const maxSubArray1 = function (nums: number[]) {
    let max = nums[0];
    let n = 0;
    do {
        let value = 0;
        for (let index = n; index < nums.length; index++) {
            value += nums[index];
            if (max < value) {
                max = value;
            }
        }
        n++;
    } while (n < nums.length);
    return max;
};
const maxSubArray2 = function (nums: number[]) {
    const l = nums.length;
    let max = nums[0];
    let value = 0;
    let n = 0;
    for (let index = n; index < l; index++) {
        value += nums[index];
        if (max < value) {
            max = value;
        }
        if (index === l - 1) {
            value = 0;
            index = n++;
        }
    }
    return max;
};
