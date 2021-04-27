const btn = document.querySelector(".btn");
const cont = document.querySelector(".cont");
const active = document.querySelector(".active");
const inc = document.querySelector(".inc");
const line = document.querySelector(".line");
const ptive = document.querySelector(".ptive");
const stat = document.querySelectorAll(".stat");
var a = 0;
var b;
btn.addEventListener('click', function () {
  cont.style.transform = 'scale(0)';
   active.style.transform = 'scale(1)';
   b = setInterval(hut,50);
});
const hut = ()=>{
   a++;
     inc.innerHTML = a+'%';
     line.style.width = a+"%";
     if (a === 100) {
clearInterval(b);
 active.style.transform = 'scale(0)'
ptive.style.transform = 'scale(1)';
     }
}
stat[0].addEventListener('click', function () {
  active.style.transform = 'scale(0)'
ptive.style.transform = 'scale(0)';
 cont.style.transform = 'scale(1)';
 console.log("fuck");
 hut();
 a = 0;
});
stat[1].addEventListener('click', function () {
  active.style.transform = 'scale(0)'
ptive.style.transform = 'scale(0)';
 cont.style.transform = 'scale(1)';
 console.log("fuck");
 hut();
 a = 0;
});