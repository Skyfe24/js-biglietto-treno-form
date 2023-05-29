console.log('JS OK');
//const total = document.getElementById('ticketPrice')


const elementButton = document.getElementById('buttonX');
const elementName = document.getElementById('Name');
const elementKms = document.getElementById('kms');
const elementAge = document.getElementById('age');
const pricePerKm = 0.21;
const discountUnder18 = 0.8;
const discountOver65 = 0.6;

const under18 = 18;
const over65 = 65;
console.log(elementName, elementKms, elementAge, pricePerKm, under18, over65, discountUnder18, discountOver65, buttonX);


let ticketPrice = elementKms * pricePerKm; // esce NaN in console.log e non so perchè
console.log(ticketPrice);


//proviamo a calcolare in base agli age-span forniti:
if (elementAge === "Junior") {
    ticketPrice = ticketPrice * discountUnder18
} else if (elementAge === "Senior") {
    ticketPrice = ticketPrice * discountOver65

}





//buttonX.addEventListener('click', function()) { da qui dovrà comparire una table col resoconto di tutto



//}





//const sumKms = prompt(`Quanti km devi percorrere?`, 100).trim()
//const userAge = prompt(`Quanti anni hai?`, 99).trim()
//console.log(sumKms, userAge);

//let  ticketPrice = sumKms * pricePerKm
//console.log(ticketPrice);

//if (userAge < 18) {
//    ticketPrice = ticketPrice * discountUnder18
//} else if (userAge > 65) {
//    ticketPrice = ticketPrice * discountOver65
//}
//console.log(ticketPrice);
//document.getElementById('ticketPrice').innerText = ticketPrice