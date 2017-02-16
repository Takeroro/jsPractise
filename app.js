var message = 'hello world';
var array = message.split(' ');

var b = message.indexOf('hello') > -1;

var x = 5;
var y = '5'

function log (message, ...rest){
    console.log(message,...rest);
}

console.log(x!==y);
console.log(array);
console.log(message);

var d = new Date().getDate();
console.log('今日系'+d+'号');

// array forEach
var array = [1,2,3];
array.forEach(function(val,idx,array)
{
    console.log(val);
});

//array map
function threeTimes(x){
    return 3*x;
}
console.log(array.map(threeTimes));

//array reduce
var testReduce = array.reduce(function (x,y){
    return x+y;
});
console.log('reduce result: '+ testReduce);

//test passed
function product(arr) {
    var result = 0;
   return arr.reduce(function (x, y){
         return x * y;
    });
    // return result;
}
console.log('test reduce result: '+ product(array));
//

// string to array 
var string = '43579';
var arrayFromString = Array.from(string);
console.log(arrayFromString);
var newArray = arrayFromString.map(function(val,index,array){
    return parseInt(val);
});
console.log(newArray);

// lowercase()
var sArray = ['APPLe','DicK'];
var s = "APPLe";
console.log(s.toLowerCase());

var lArray = sArray.map(function(val)
{
   return val.toLowerCase();
})
console.log(lArray);

//array filter()
var arr = ['A', 'B', 'C'];
var r = arr.filter(function (element, index, self) {
    return element === 'A';
});
log(r);

//dictionary (javascrip object) 无 forEach
var dic = {'a':3,'b':4,'c':5};

// dic.forEach(function (val){
//     console.log(val);
// });

// for循环等语句块中是无法定义具有局部作用域的变量的,得用let修饰才能限定其作用域，坑。
console.log('遍历dic:');
for (let key in dic) {
    console.log(+dic[key]);
}
// console.log('这儿的key如何: '+key);


var abs = function (a,b){
    console.log(a,b);
};

abs('123');
//高阶函数
function dickFun(x,y,f) {
    return f(x)+f(y);
}
var x = -5, y = 7 ;

var result = dickFun(x,y,Math.abs);
console.log(result);