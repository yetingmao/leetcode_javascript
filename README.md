## 说明 ##
* 在leetcode上的题目
* 使用typescript语言
* 先从初级的题目开始，至少一周做一道

## 依赖 ##
* yetm
************

#### Two Sum(两数之和)
##### 给定一个整数数组nums和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
##### 你可以假设每种输入只会对应一个答案。但是你不能重复利用这个数组中同样的元素。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/1_20.ts)
************

#### Reverse Integer(整数反转)
##### 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/1_20.ts)
************

#### Palindrome Number(回文数)
##### 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/1_20.ts)
************

####  Longest Common Prefix(最长公共前缀)
##### 编写一个函数来查找字符串数组中的最长公共前缀，如果不存在公共前缀，返回空字符串 ""。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/1_20.ts)
************

### Valid Parentheses(有效的括号)
##### 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
##### 有效字符串需满足：左括号必须用相同类型的右括号闭合。左括号必须以正确的顺序闭合。注意空字符串可被认为是有效字符串。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/1_20.ts)

#### 其他解法(未写)
##### 1. 栈中放的只有当前需要出现的右部
##### 2. 当出现一个左部的时候，就将应该出现的右部放入栈中
##### 3. 当出现右部时和栈顶元素比较，如果不相同则返回FALSE
##### 4. 最后栈为非空时也会返回FALSE
##### 5. 都没有问题的时候会返回TRUE
************

#### Remove Duplicates from Sorted Array(删除排序数组中的重复项)(第一个方法是废的)
##### 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
##### 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/1_20.ts)
************

#### Remove Element(移除元素)
##### 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。
##### 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
##### 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/1_20.ts)
************

#### Search Insert Position(搜索插入位置)
##### 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
##### 你可以假设数组中无重复元素。
###### 我把插入数组之后的方法也写了(注释中)
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/1_20.ts)
************

#### Count and Say(报数)
##### 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：
##### 1.     1
##### 2.     11
##### 3.     21
##### 4.     1211
##### 5.     111221
##### 1 被读作  "one 1"  ("一个一") , 即 11。
##### 11 被读作 "two 1s" ("两个一"）, 即 21。
##### 21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。
##### 给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。
##### 注意：整数顺序将表示为一个字符串。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/1_20.ts)
************
