## 说明 ##
* 在leetcode上的题目
* 使用typescript和JavaScript语言
* 先从初级的题目开始，至少一周做一道

## 依赖 ##
* yetm
************

#### Two Sum(两数之和)
##### 给定一个整数数组nums和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
##### 你可以假设每种输入只会对应一个答案。但是你不能重复利用这个数组中同样的元素。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/1_10.ts)
************

#### Reverse Integer(整数反转)
##### 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/1_10.ts)
************

#### Palindrome Number(回文数)
##### 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/1_10.ts)
************

####  Longest Common Prefix(最长公共前缀)
##### 编写一个函数来查找字符串数组中的最长公共前缀，如果不存在公共前缀，返回空字符串 ""。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/1_10.ts)
************

#### Valid Parentheses(有效的括号)
##### 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
##### 有效字符串需满足：左括号必须用相同类型的右括号闭合。左括号必须以正确的顺序闭合。注意空字符串可被认为是有效字符串。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/1_10.ts)

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
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/1_10.ts)
************

#### Remove Element(移除元素)
##### 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。
##### 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
##### 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/1_10.ts)
************

#### Search Insert Position(搜索插入位置)
##### 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
##### 你可以假设数组中无重复元素。
###### 我把插入数组之后的方法也写了(注释中)
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/1_10.ts)
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
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/1_10.ts)
************

####  Maximum Subarray(最大子序和)
##### 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/1_10.ts)
************

####  Length of Last Word(最后一个单词的长度)
##### 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。如果不存在最后一个单词，请返回 0 。
##### 说明：一个单词是指由字母组成，但不包含任何空格的字符串。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/11_20.ts)
************

####  Plus One(加一)
##### 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
##### 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。
##### 你可以假设除了整数 0 之外，这个整数不会以零开头。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/11_20.ts)
************

####  Add Binary(二进制求和)
##### 给定两个二进制字符串，返回他们的和（用二进制表示）。输入为非空字符串且只包含数字 1 和 0。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/11_20.ts)
************

####  Climbing Stairs(爬楼梯)
##### 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
#####  注意：给定 n 是一个正整数;
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/11_20.ts)
###### 爬楼梯直接思路递归法，登顶的最后一步有两种走法，也就是1步，后者2步。
###### 所以可以得出公式f(n) = f(n-1) + f(n-2).
************

####  Merge Sorted Array(合并两个有序数组)
##### 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
###### 说明:
###### 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
###### 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/11_20.ts)
************

####  Same Tree(相同的树)
##### 给定两个二叉树，编写一个函数来检验它们是否相同。如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
###### 说明:
######  Definition for a binary tree node.
######  function TreeNode(val) {
######      this.val = val;
######      this.left = this.right = null;
######
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/11_20.ts)
************

####   Maximum Depth of Binary Tree(二叉树的最大深度)
##### 给定一个二叉树，找出其最大深度。 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/11_20.ts)
************

####  Path sum(路径总和)
##### 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
##### 说明: 叶子节点是指没有子节点的节点。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/11_20.ts)
************


####  object deep(路径总和)
##### 求一个对象的深度。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/11_20.ts)
************

####  binary-tree-level-order-traversal-ii(二叉树的层次遍历 II)
##### 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/11_20.ts)
************

####  一维数组的动态和
##### 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。请返回 nums 的动态和。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/21_30.js)
************

####  拥有最多糖果的孩子
##### 给你一个数组 candies 和一个整数 extraCandies ，其中 candies[i] 代表第 i 个孩子拥有的糖果数目。
##### 对每一个孩子，检查是否存在一种方案，将额外的 extraCandies 个糖果分配给孩子们之后，此孩子有 最多 的糖果。注意，允许有多个孩子同时拥有 最多 的糖果数目。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/21_30.js)
************


####  重新排列数组
##### 给你一个数组 nums ，数组中有 2n 个元素，按 [x1,x2,...,xn,y1,y2,...,yn] 的格式排列
##### 请你将数组按 [x1,y1,x2,y2,...,xn,yn] 格式重新排列，返回重排后的数组。 
##### 用了三种方法去实现。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/21_30.js)
************

####  左旋转字符串
##### 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/21_30.js)
************

####  猜数字
##### 小A 和 小B 在玩猜数字。小B 每次从 1, 2, 3 中随机选择一个，小A 每次也从 1, 2, 3 中选择一个猜。他们一共进行三次这个游戏，请返回 小A 猜对了几次？
##### 输入的guess数组为 小A 每次的猜测，answer数组为 小B 每次的选择。guess和answer的长度都等于3。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/21_30.js)
************

####  宝石与石头
##### 给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
##### J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/21_30.js)
************

####  整数的各位积和之差
##### 给你一个整数 n，请你帮忙计算并返回该整数「各位数字之积」与「各位数字之和」的差。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/21_30.js)
************

####  IP 地址无效化
##### 给你一个有效的 IPv4 地址 address，返回这个 IP 地址的无效化版本。所谓无效化 IP 地址，其实就是用 "[.]" 代替了每个 "."。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/21_30.js)
************

####  将数字变成 0 的操作次数
##### 给你一个非负整数 num ，请你返回将它变成 0 所需要的步数。 如果当前数字是偶数，你需要把它除以 2 ；否则，减去 1 。
##### 两种方法，第二种学会了 >> 运算符
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/21_30.js)
************

####  按既定顺序创建目标数组
##### 给你两个整数数组 nums 和 index。你需要按照以下规则创建目标数组：
##### 目标数组 target 最初为空。
##### 按从左到右的顺序依次读取 nums[i] 和 index[i]，在 target 数组中的下标 index[i] 处插入值 nums[i] 。
##### 重复上一步，直到在 nums 和 index 中都没有要读取的元素。
##### 请你返回目标数组。题目保证数字插入位置总是存在
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/21_30.js)
************

####  解压缩编码列表
##### 给你一个以行程长度编码压缩的整数列表 nums 。考虑每对相邻的两个元素 [freq, val] = [nums[2*i], nums[2*i+1]] （其中 i >= 0 ），
##### 每一对都表示解压后子列表中有 freq 个值为 val 的元素，你需要从左到右连接所有子列表以生成解压后的列表。
##### 请你返回解压后的列表。
[Code](https://github.com/yetingmao/leetcode_javascript/blob/master/easy/21_30.js)
************