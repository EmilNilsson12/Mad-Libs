/*
const namn = prompt("Vad heter du?");
const antalSyskon = prompt("Hur många syskon har du");
const djur = prompt("När du går på zoo, vilket djur vill du se först?");
const braPlats = prompt("Var i världen hade du helst rest till om du fick välja exakt var som helst?");
const inteBraPlats = prompt("Var i världen hade du inte velat resa till även om någon betalde dig 1 miljon kronor?");

const madLibMening = `Hej ${namn}! Wow ${antalSyskon} st syskon! Så många har inte jag... Men jag gillar också ${djur}. Det kankse finns i ${braPlats}. Kanske därför du vill åka dit. ${inteBraPlats} låter inte som den bästa semesterorten, förstår varför du inte vill åka dit!`

const body = document.querySelector('body');

const para = document.createElement('p');
const paraText = document.createTextNode(madLibMening);

para.appendChild(paraText)
body.appendChild(para)

*/

const submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', showResult);


const para = document.querySelector('p');


function showResult() {
    console.log("clicked")
    para.classList.toggle("hidden");
}
