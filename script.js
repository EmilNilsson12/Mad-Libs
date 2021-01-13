const submitBtn = document.getElementById('sbmtBtn');
submitBtn.addEventListener('click', showResult);

const form = document.querySelector('form');

const spanList = form.querySelectorAll("span");

//Hämta nodelist med alla input
//Konvertera till en array för att kunn använda .every() på listan
let inputList = form.querySelectorAll("input");
let inputListArr = Array.from(inputList)


function showResult() {

    //Ser till att alla fält är ifyllda
    const checkValues = (li) => li.value != "";
    const allInputsHaveValues = inputListArr.every(checkValues)

    const errorMsg = document.createElement("h3");

    if (allInputsHaveValues) {
        inputList.forEach((item) => {

            //Spara value från varje input-fält
            //Skriv över input-tag och label-tag med value från input i span-taggen
    
            const parentE = item.parentElement;
            parentE.innerHTML = `${item.value}`;
        })

        //Visa resten av texten
        spanList.forEach((item) => {
            item.classList.add("show")
        })

        //Ta bort felmeddelanden som kom ifall användaren glömde fylla i alla fält
        const listOfH3s = document.querySelectorAll('h3')
        listOfH3s.forEach(  (li) => {
            li.classList.add('hide');
        });
    }
    else {
        errorMsg.textContent = "Please fill in all fields!"
        errorMsg.style.color = "red"
        submitBtn.insertAdjacentElement('afterEnd', errorMsg)
    }
}
