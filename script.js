
const submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', showResult);


const para = document.querySelector('p');


function showResult() {
    console.log("clicked")
    para.classList.toggle("hidden");
}
