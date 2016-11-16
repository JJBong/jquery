/**
 * Created by kim on 2016-11-16.
 */
function myFunc() {
    console.log($("#apple").text());
    console.log($("#pineapple").text());
    console.log($("#pineapple + li").text());
    //console.log($("#uId").val());
    console.log($("form > input").attr("id"));
    console.log($("div ol li:first").text());
    console.log($("div ol li:nth-child(2)").text());
    //console.log($("div ol li:first + li").text());
    console.log($("div ol li:last").text());
}
