function HeaderInit() {
    var s = "";
    s += "<span class='span_title'>Zero</span>";
    $(".header").html(s);
}

function Top_navInit() {
    var s = "";
    s += "<a class='link_home' href='../../Home/HomePage.html'>首页</a>";
    s += "<a class='link_home' href='../../ChildJquery/home/nav_Home.html'>JQUERY</a>";
    s += "<a class='link_home' href='../../ChildHtml5/home/nav_Home.html'>HTML5</a>";
    s += "<a class='link_home' href='../../ChildCss3/home/nav_Home.html'>CSS3</a>";
    s += "<a class='link_home' href='../../ChildGame/home/nav_Home.html'>小游戏</a>";
    s += "<a class='link_home' href='../../ChildChaj/home/nav_Home.html'>插件</a>";
    $(".top_nav").html(s);
}
function FooterInit() {
    var s = "";
    s += "Copyright © Zero";
    $(".footer").html(s);
}
$(function () {
    HeaderInit();
    Top_navInit();
    FooterInit();
})
