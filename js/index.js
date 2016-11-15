/**Created by kim on 2016-11-15.*/

var test1 = 100;
var test2 = true;
var test3 = 'h';
var test4 = null;
var test5;

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);

//선언적 함수
function myfunction(temp1, temp2) {
    return temp1 + temp2;
}
var result1 = myfunction(10, 20);
console.log(result1);

//람다 함수
var result2 = function (temp1, temp2) {
    return temp1 + temp2;
}
console.log(result2(20, 30));

//객체안에는 변수에 해당하는 property(변수명은 'key'에 해당), 함수에 해당하는 method가 있다.
var obj = {
    myname : "김주봉",
    myage : 30,
    myinfo : function (name, age) {
        return name + age;
    }
}
console.log(obj.myinfo(obj.myname, obj.myage));
console.log(obj["myage"]);