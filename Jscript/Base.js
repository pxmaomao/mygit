
function HeaderInit() {
    var s = "";
    s += "<div class='nav'>";
    s += "<ul>";
    s += "<li><a href='../../Home/HomePage.html'>首页</a></li>";
    s += "<li><a href='../../ChildJquery/home/nav_Home.html'>JQUERY</a></li>";
    s += "<li><a href='../../ChildHtml5/home/nav_Home.html'>HTML5</a></li>";
    s += "<li><a href='../../ChildCss3/home/nav_Home.html'>CSS3</a></li>";
    s += "<li><a href='../../ChildGame/home/nav_Home.html'>小游戏</a></li>";
    s += "<li><a href='../../ChildChaj/home/nav_Home.html'>插件</a></li>";
    s += "</ul>";
    s += "</div>";
    $(".header").html(s);
}

function FooterInit() {
    var s = "";
    s += "Copyright © Zero";
    $(".footer").html(s);
}
$(function () {
    HeaderInit();
    FooterInit();
})

