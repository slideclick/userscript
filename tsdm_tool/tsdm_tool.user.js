// ==UserScript==
// @name        天使动漫小工具
// @namespace   wk
// @description 作用天使动漫论坛，缩回右方的弹出边栏(动漫资讯)，添加完成签到按钮(点开始签到再点完成签到)
// @include     /https?:\/\/www\.tsdm\.\w{2,3}.*/
// @updateURL   https://github.com/4thleaf/userscript/raw/master/tsdm_tool/tsdm_tool.meta.js
// @downloadURL https://github.com/4thleaf/userscript/raw/master/tsdm_tool/tsdm_tool.user.js
// @author      与你偶遇的树下
// @icon        http://himg.baidu.com/sys/portraitl/item/da35115e?t=1460692207
// @license     MIT
// @version     1.1
// @grant       none
// ==/UserScript==

(function sign() {

    // 签到按钮没有特定的类名和ID，而且如果用户绑定了微博或QQ，按钮的位置也会不同，因此只能获取三个可能的位置逐一判断
    var btn1 = document.querySelector("#inner_stat > a:nth-of-type(5)"),
        btn2 = document.querySelector("#inner_stat > a:nth-of-type(6)"),
        btn3 = document.querySelector("#inner_stat > a:nth-of-type(7)"),
        navBarRight = document.getElementById("inner_stat"),
        btnSignByClient = document.createElement("a");

    btnSignByClient.innerText = "完成签到 ";

    if (btn3.innerText === "签到领奖!") {

        navBarRight.insertBefore(btnSignByClient, btn3);
    } else if (btn1.innerText === "签到领奖!") {

        navBarRight.insertBefore(btnSignByClient, btn1);
    } else if (btn2.innerText === "签到领奖!") {

        navBarRight.insertBefore(btnSignByClient, btn2);
    }
    else {
        // 签到已完成，不在页面上插入完成签到链接
    }

    btnSignByClient.addEventListener("click", function () {
        document.getElementById("kx").click();
        document.getElementById("todaysay").value = "前来签到";
        document.querySelector("p.o button.pn").click();
    });

    var sidebarSwitch = document.getElementById('ts_slide_close');

    if (sidebarSwitch.style.display.toString() === 'block') {
        sidebarSwitch.click();
        console.log('已收缩边栏');
    } else if (sidebarSwitch.style.display.toString() === 'none') {
        console.log('边栏并未弹出，不作处理');
    } else {
        console.log('边栏的display属性值未知，不作处理');
    }
})();
