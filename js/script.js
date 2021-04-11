$(document).ready(function(){
$(window).mousemove(function(e){
 let y = e.clientY;
//  console.log(y);
$(".hover-element").css("margin-top", y);
   
}); 
  
$("nav ul li a").mouseover(function(){
    let activeLinkId = $(this).attr("href"); 
  
  $(".link-img img").removeClass("active");
  
  $(".link-img img"+activeLinkId).addClass("active");
  
});
  
  let toggleBtn = document.querySelector(".toggle");
  
  let tl =  new TimelineMax({paused: true});
  
  tl.to(".toggle span:nth-child(2)", 1, {
       right: "-100" 
        
  }, );
  
  tl.to(".toggle span:nth-child(1)", 1, {
       rotate: 45,
       top: 10
        
  },"-=1");
  
  tl.to(".toggle span:nth-child(3)", 1, {
       rotate: -45,
       top: 10
        
  },"-=1");
  
  tl.to("nav", 1.4, {
    left: "0"
  }, "-=1");
  
  tl.from("nav ul li", 1.4, {
    x: -300,
    opacity: 0,
    stagger: .3
  })
  
  tl.from(".link-img", 1.4, {
    scale: 1.1,
    opacity: 0
  })
  
  tl.reverse()
  toggleBtn.addEventListener("click", () => {
    tl.reversed(!tl.reversed());
  })
  
  
                  
});