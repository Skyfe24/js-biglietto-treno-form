console.log('JS OK');
const total = document.getElementById('ticketPrice')

const pricePerKm = 0.21;
const under18 = 18;
const over65 = 65;
const discountUnder18 = 0.8;
const discountOver65 = 0.6;
console.log(pricePerKm, under18, over65, discountUnder18, discountOver65);

//const sumKms = prompt(`Quanti km devi percorrere?`, 100).trim()
//const userAge = prompt(`Quanti anni hai?`, 99).trim()
console.log(sumKms, userAge);

let  ticketPrice = sumKms * pricePerKm
console.log(ticketPrice);

if (userAge < 18) {
    ticketPrice = ticketPrice * discountUnder18
} else if (userAge > 65) {
    ticketPrice = ticketPrice * discountOver65
}
console.log(ticketPrice);
document.getElementById('ticketPrice').innerText = ticketPrice