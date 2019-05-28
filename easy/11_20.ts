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
