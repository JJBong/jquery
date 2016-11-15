/**
 * Created by kim on 2016-11-15.
 */

function startClock() {
    //js를 html div에 바로 적용불가
    //html div를 js객체로 만들면 될지도몰랑
    var div = document.getElementById("clockDiv");

    window.setInterval(function () {
        //현재 시간구하기
        //현재시간을 div에 출력
        var today = new Date().toLocaleString();
        div.innerHTML = today;
    },1000);
}