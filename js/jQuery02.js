/**
 * Created by kim on 2016-11-16.
 */

function myFunc() {
    //selector
    //현재 html안에 있는 모든 엘리먼트를 다 선택해서 글자색을 red로 변경
    //$(" * ").css("color", "red");
    //$("h1, input").css("color", "red");
    //$("#cheonju").remove();
    //$(".myClass").css("background-color", "yellow");
    //$("[type=button]").css("color", "red");
    //$("div > ul > li[id]").css("color", "red");
    //$("div li[id =cheonju]").css("color", "red");
    //alert($("#cheonju + li").text());
    alert($(".myClass + li + li").text());
}