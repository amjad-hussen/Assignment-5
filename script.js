// Cleaking The heart Icon

const hearts = document.getElementsByClassName('blank-heart');

let heartIconValue = 0;

for(const heart of hearts){
    heart.addEventListener('click',function(){
        heartIconValue++
        document.getElementById('heart-count').innerText = heartIconValue
        
        
    })
}

// function callService(serviceName , serviceNumber){
//     document.getElementById('all-call-btn')
//     .addEventListener('click', function(){
//         alert (serviceName + "," + serviceNumber)
//     })
// }

// callService(service-1, service-number-1)

// // Call Button Interaction
// const serviceName = document.getElementById('service-1').innerText
// const serviceNumber = document.getElementById('service-number-1').innerText

// document.getElementById('all-call-btn')
// .addEventListener('click', function (){
//     alert(serviceName + ", " + serviceNumber)
// })

const serviceCards = document.querySelectorAll('.all-card');

for(const card of serviceCards){
    const serviceName = card.querySelector('.service-name').innerText
    const serviceNumber = card.querySelector('.service-number').innerText

    const callButton = card.querySelector('.call-btn')

    callButton.addEventListener('click', function (){
        const availableCoin = parseInt(document.getElementById('coins').innerText)
        const cutCoin = 20;

        if(availableCoin < 20 ){
            alert('Please Recharge Your Coin')
            return;
        }

        const totalAvailableCoin = availableCoin - cutCoin
        
        document.getElementById('coins').innerText = totalAvailableCoin

        alert(serviceName + ", " + serviceNumber); 
    })
}


