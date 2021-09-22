
// $("#burger-menu").on("click", function(){
//     $("#menu").toggleClass("open-menu");
//     $("#socicon").toggleClass("open-socicon");
//     $("#head-size").toggleClass("open-head-size");
//   })


let codes = document.getElementById('codes');
let mans = document.getElementById('mans');
let mans2 = document.getElementById('mans2');
let gk = document.getElementById('gk');
let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
let face = document.getElementById('face');
let insta = document.getElementById('insta');
let linked = document.getElementById('linked');
let yout = document.getElementById('yout');
let gk2 = document.getElementById('gk2');
let project = document.getElementById('project');
let k1box = document.getElementById('k1box');
let hotelbox = document.getElementById('hotelbox');
let lorembox = document.getElementById('lorembox');
let foodbox = document.getElementById('foodbox');

window.addEventListener('scroll', function(){
   let value = window.scrollY;
   codes.style.top = value * 0.5 + 'px';
   mans.style.left = value * 0.9 + 'px';
   mans2.style.left = value * 1.0 + 'px';
   gk.style.marginTop = value * 1.3 + 'px';
   btn.style.marginTop = value * 1.5 + 'px';
   btn2.style.marginLeft = value * 1.9 + 'px';
   face.style.marginLeft = value * 1.0 + 'px';
   insta.style.marginLeft = value * 0.8 + 'px';
   linked.style.marginLeft = value * 0.6 + 'px';
   yout.style.marginLeft = value * 0.4 + 'px';
   gk2.style.marginTop = value * 0.3 + 'px';
   project.style.marginTop = value * 1.3 + 'px';
   k1box.style.marginLeft = value * 1.3 + 'px';
   hotelbox.style.marginRight = value * 1.3 + 'px';
   lorembox.style.marginTop = value * 1.3 + 'px';
   foodbox.style.marginTop = value * 1.3 + 'px';
   
})



