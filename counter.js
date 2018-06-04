function plus(a,b) {
    return `相加为：${a+b}`;
}
function lunNum(array) {
   return "这个数组里共有"+array.length+"种语言";
}

module.exports ={
    plus :plus,
    lunNum:lunNum
};