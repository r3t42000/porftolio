var web_datas = [
{
 name: "夢台",
 image: "image/works_image/dream.png",
 url: "https://r3t42000.github.io/dreamplatform/",
},
{
 name: "What i prefer",
 image: "image/works_image/movie.png",
 url: "",
},
{
 name: "Password",
 image: "image/works_image/password.png",
 url: "https://s.codepen.io/lan_zai/debug/VWxLNP/PNrvYLRKQDNM",
},
{
 name: "Password",
 image: "image/works_image/password.png",
 url: "https://s.codepen.io/lan_zai/debug/VWxLNP/PNrvYLRKQDNM",
},
];
var illustration_datas =[

{
 name: "Freakylan",
 image: "image/freakylan/1.png",
 url: "/porftolio/html/freakylan",
},
{
 name: "Pappa",
 image: "image/works_image/pappa.png",
 url: "/porftolio/html/pappa",
},
];
$(document).ready(function(){
    $(document).scroll(function(){
        $(".pagetop_button").click(function(){
            $("html,body").animate({
            scrollTop: 0
            },800)
            $("html,body").css("scrollTop",atuo)
        })
    })
})



var vm = new Vue({
    el: "#proftolio",
    data: {
        web: web_datas,
        illustration: illustration_datas,
        now_data: web_datas,
        hi: 1,
    },
    methods:{
        work_click: function(obj,num){
            this.now_data = obj
            $(".work_nav_item").removeClass("active")
            $(".work_nav_item").eq(num).addClass("active")

        },
    }

})