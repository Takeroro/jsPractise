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
    console.log(dic[key]);
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

//闭包
function initTimer(initial)
{
    var x = initial || 0;
    return { 
       tick: function (){
        x += 1;
        return x;
        }
    }
}

var c1 = initTimer(0);
c1.tick();
c1.tick();
console.log(c1.tick());

//正则 ()用来分组的···
var re = /^(\d{3})\-(\d{3,8})$/;
re.exec('010-12345'); // ['010-12345', '010', '12345']

  //\s =》空格 \s+ => 1个或多个空格
'a b   c'.split(/\s+/); // ['a', 'b', 'c']

//json
var xiaojuan = {
    name : '小娟',
    age : 17
}

var xiaoming = {
    name : 'dick',
    age : 19,
    wife : xiaojuan
};

JSON.stringify(xiaoming);

var jsonStr = "{\"adverTime\":2000,\"iosVersion\":\"2.12.0\",\"androidVersion\":\"3.10.0\",\"jumpType\":\"channel\",\"color\":\"#9594eb\",\"sid\":3045,\"ssid\":3045}";
var jsonObj = JSON.parse(jsonStr);

//构造方法 new 
function Student(name) {
    this.name = name;
    this.hello = function () {
        console.log('Hello, ' + this.name + '!');
    }
}

var dickHead = new Student("dickHead");
var dick = Student('dick');

dickHead.hello();
// dick.hello();``