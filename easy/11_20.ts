//11.最后一个单词的长度
const lengthOfLastWord = function (s: string) {
    const t = s.trim();
    if (t.length === 0) {
        return 0;
    }
    const sl = t.split(" ");
    const sll = sl[sl.length - 1].length
    return sll;
};
// 12.加一 （不要超过最大数）
const plusOne = function (digits: number[]) {
    digits.reverse();
    let i = 0;
    for (const d of digits) {
        if (d + 1 <= 9) {
            digits[i] = (d + 1);
            break;
        } else {
            digits[i] = 0;
            if (i === digits.length - 1) {
                digits[i + 1] = 1;
                break;
            } else {
                i++;
            }
        }
    }
    return digits.reverse();
};
var plusOne1 = function (digits) {
    const narr = [];
    let i = digits.length;
    let n = 1;
    let curr;
    while (i > 0 || n) {
        --i;
        curr = (i >= 0 ? digits[i] : 0) + n;
        n = curr / 10 | 0;//
        narr.unshift(curr % 10);
    }
    return narr;
};
//13二进制求和
var addBinary = function (a: string, b: string) {
    let len = 0;
    const al = a.length;
    const bl = b.length;
    let s = "";
    let add = 0;
    do {
        len++;
        const ad = a[al - len] ? a[al - len] : 0;
        const bd = b[bl - len] ? b[bl - len] : 0;
        if (ad !== 0 || bd !== 0) {
            const data = parseInt(`${ad}`, 10) + parseInt(`${bd}`, 10) + add;
            s = data % 2 + s;
            add = Math.floor(data / 2);
        } else {
            s = add !== 0 ? add + s : s;
            break;
        }
    } while (true);
    return s;
};
// 14 爬楼梯
var climbStairs = function (n: number) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2
    }
    let a = 1;
    let b = 2;
    for (let i = 3; i <= n; i++) {
        const r = a + b;
        a = b;
        b = r;
    }
    return b
};
// 15.合并两个有序数组
var merge = function (nums1: number[], m: number, nums2: number[], n: number) {
    let c1 = 0;
    let c2 = 0;
    const len = nums1.length;
    while (c1 < m && c2 < n) {
        if (nums1[c1] < nums2[c2]) {
            nums1.push(nums1[c1]);
            c1++;
        } else {
            nums1.push(nums2[c2]);
            c2++;
        }
    }
    if (c1 < m) {
        nums1.splice(nums1.length, 0, ...nums1.slice(c1, m));
    }
    if (c2 < n) {
        nums1.splice(nums1.length, 0, ...nums2.slice(c2, n));
    }
    nums1.splice(0, len);
};
var merge1 = function (nums1: number[], m: number, nums2: number[], n: number) {
    nums1.splice(m, nums1.length - m, ...(nums2.slice(0, n)));
    nums1.sort((a, b) => a - b);
};
var merge2 = function (nums1: number[], m: number, nums2: number[], n: number) {
    nums1.splice(m, n, ...nums2);
    nums1.sort((a, b) => a - b);
};