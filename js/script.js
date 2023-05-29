console.log('JS OK')

// Raccolgo gli elemnti dal DOM

const userName = document.getElementById('user-data')
const buttonSubmit = document.querySelector('.submit');
const buttonReset = document.querySelector('.reset');
const finalPricePlaceholder = document.getElementById('ticket-price')
const ticketBasePrice = 0.25
const passenger = document.getElementById('passenger')
const distance = document.getElementById('distance')
const userAge = document.getElementById('age')
const myTicket = document.querySelector('.ticket')
const ticketNumber = document.getElementById('ticket-number')
const coachNumber = document.getElementById('coach')


// Creazione del prezzo del biglietto al click del bottone

buttonSubmit.addEventListener('click', function() {
    
    console.log(userName, distance, userAge)
    
    //Calcolo il prezzo standard del biglietto 

    const tickePrice = ticketBasePrice * distance.value

    // calcolo lo sconto

    let discount = 0
    //Se l'utente indica un'età minore di 18 anni applico lo sconto del 20%
    if (userAge === 'young') {
        discount = tickePrice * 0.2
    //Se l'utente indica un'età maggiore di 65 anni applico lo sconto del 40%
    } else if (userAge === 'old') {
        discount = tickePrice * 0.4
    }

    console.log('Sconto: ' + discount)

    // Calcolo prezzo finale del biglietto con lo sconto
    const resultPrice = tickePrice - discount
    console.log(resultPrice)
    finalPricePlaceholder.innerText += '€ ' + resultPrice.toFixed(2)

    // Stampiamo sul DOM il prezzo finela del biglietto
    passenger.innerText += userName.value.trim();

    //Togliemo la classe hidden dal ticket del utente 
    myTicket.classList.remove('visually-hidden')
    
    // Randomizziamo il numero di serie del biglietto e lo stampiamo sul biglietto
    const randomNumber = Math.floor(Math.random()*1000);
    ticketNumber.innerText += randomNumber

    //Randomizziamo la assegnazione della carrozza e la stampiamo sul biglietto
    const randomCoachNumber = Math.floor(Math.random()*12);
    coachNumber.innerText += randomCoachNumber

    //Stampiamo sul biglietto il tipo di biglietto
    

});
 

// TODO Creo il bottone reset per i campi da compilare


buttonReset.addEventListener('click', function() {

    userName.value = ''
    distance.value = ''
    userAge.value = ''
    passenger.value = ''
    finalPricePlaceholder.value = ''
    myTicket.classList.add('visually-hidden')

});

